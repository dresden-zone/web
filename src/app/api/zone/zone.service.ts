import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Zone} from "./zone.domain";
import {HttpClient} from "@angular/common/http";
import {MAX_CACHE_AGE_MS} from "../api.domain";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private nextUpdate = 0;
  private zones0 = new BehaviorSubject<Zone[]>([]);

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getZones(): Observable<Zone[]> {
    const now = this.nextUpdate < Date.now();

    if (now) {
      this.nextUpdate = Date.now() + MAX_CACHE_AGE_MS;
      this.http.get<Zone[]>(`/api/v1/zone`)
        .subscribe(zones => this.zones0.next(zones));
    }

    return this.zones0.asObservable();
  }

  public getZone(id: string): Observable<Zone | null> {
    return this.getZones().pipe(
      map(zones => zones.find(zone => zone.id === id) ?? null)
    );
  }
}
