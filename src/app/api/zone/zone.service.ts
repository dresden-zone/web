import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, distinct, map, Observable, retry, switchMap, tap} from "rxjs";
import {CreateRecord, RecordType, Zone, ZoneRecord} from "./zone.domain";
import {HttpClient} from "@angular/common/http";
import {API_BASE, MAX_CACHE_AGE_MS} from "../api.domain";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private readonly zoneId0 = new BehaviorSubject<string | null>(null);
  private readonly zoneId = this.zoneId0.pipe(distinct());

  private nextZonesUpdate = 0;
  private readonly zones = new BehaviorSubject<Zone[]>([]);

  private nextRecordsUpdate = 0;
  private readonly records = new BehaviorSubject<Map<RecordType, ZoneRecord<unknown>[]>>(new Map());

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public selectZone(id: string | null): void {
    this.zoneId0.next(id);
    this.nextRecordsUpdate = 0;
  }

  public getZones(): Observable<Zone[]> {
    const update = this.nextZonesUpdate < Date.now();

    if (update) {
      this.nextZonesUpdate = Date.now() + MAX_CACHE_AGE_MS;
      return this.http.get<Zone[]>(`${API_BASE}/v1/zone`)
        .pipe(
          retry(3),
          tap(zones => this.zones.next(zones)),
          switchMap(() => this.zones)
        );
    }

    return this.zones.asObservable();
  }

  public getZone(): Observable<Zone | null> {
    return combineLatest([this.zoneId, this.zones])
      .pipe(map(([zoneId, zones]) => zones.find(zone => zone.id === zoneId) ?? null));
  }

  public getRecords<T extends RecordType>(type: T): Observable<ZoneRecord<T>[]> {
    const update = this.nextRecordsUpdate < Date.now();

    if (update || !this.records.value.has(type)) {
      this.nextRecordsUpdate = Date.now() + MAX_CACHE_AGE_MS;
      this.zoneId.pipe(
        switchMap(zoneId => this.http.get<ZoneRecord<T>[]>(`${API_BASE}/v1/zone/${zoneId}/record/${type}`).pipe(retry(3))),
      ).subscribe(records => {
        const newRecords = this.records.value;
        newRecords.set(type, records);
        this.records.next(newRecords)
      });
    }

    return this.records.pipe(
      map(records => (records.get(type) as ZoneRecord<T>[]) ?? [])
    );
  }

  public addRecord<T extends RecordType>(type: RecordType, record: CreateRecord<T>): Observable<void> {
    return this.http.post<ZoneRecord<T>>(`${API_BASE}/v1/zone/${this.zoneId0.value}/record/${type}`, record)
      .pipe(map(record => {
        console.log(record);
        const records = this.records.value;
        if (records.has(type)) {
          records.get(type)!.push(record);
        } else {
          records.set(type, [record]);
        }
        this.records.next(records);
      }))
  }

  public updateRecord<T extends RecordType>(id: string, type: RecordType, record: CreateRecord<T>): Observable<void> {
    return this.http.put<ZoneRecord<T>>(`${API_BASE}/v1/zone/${this.zoneId0.value}/record/${type}/${id}`, record)
      .pipe(map(record => {
        const records = this.records.value;
        const list = records.get(type);
        const existing = list?.find(record => record.record.id === id);
        for (const key in record) {
          // @ts-ignore
          existing[key] = record[key];
        }
        this.records.next(records);
      }));
  }

  public deleteRecord(id: string, type: RecordType): Observable<void> {
    return this.http.delete<void>(`${API_BASE}/v1/zone/${this.zoneId0.value}/record/${type}/${id}`)
      .pipe(map(() => {
        const records = this.records.value;
        if (records.has(type)) {
          records.set(type, records.get(type)!.filter(record => record.record.id !== id));
        }
        this.records.next(records);
      }));
  }
}
