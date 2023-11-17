import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecordType} from "../../../../api/zone/zone.domain";
import {ZoneService} from "../../../../api/zone/zone.service";
import {BehaviorSubject, filter, map, Subscription, switchMap} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotificationService} from "@feel/notification";

@Component({
  selector: 'app-cname',
  templateUrl: './cname.component.html',
  styleUrls: ['../style.scss']
})
export class CnameComponent implements OnInit, OnDestroy {

  protected readonly records = this.zoneService.getRecords(RecordType.CNAME);

  protected readonly edit = new BehaviorSubject<string | null>(null);
  protected readonly editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    target: new FormControl('', [Validators.required]),
    ttl: new FormControl(500, [Validators.required]),
  });

  protected readonly addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    target: new FormControl('', [Validators.required]),
    ttl: new FormControl(500, [Validators.required]),
  });

  private subscription: Subscription | undefined;

  constructor(
    private readonly zoneService: ZoneService,
    private readonly notificationService: NotificationService,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.edit.pipe(
      switchMap(edit => this.records.pipe(map(records => records.find(record => record.record.id === edit)))),
      filter(records => !!records)
    )
      .subscribe({
        next: r => {
          const record = r!;

          this.editForm.setValue({
            name: record.record.name,
            target: record.value.target,
            ttl: record.record.ttl,
          })
        },
      });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  delete() {
    const id = this.edit.value!;
    this.records.pipe(
      map(records => records.find(record => record.record.id === id)),
      filter(record => !!record),
      map(record => record!),
      switchMap(record => this.zoneService.deleteRecord(id, RecordType.CNAME).pipe(map(() => record)))
    ).subscribe(record => this.notificationService.success(`Record \`${record.record.name}\` was successfully deleted.`));
  }

  add() {
    if (!this.addForm.valid) {
      return;
    }

    const value = this.addForm.value;

    this.zoneService.addRecord(RecordType.CNAME, {
      name: value.name!,
      target: value.target!,
      ttl: value.ttl!,
    }).subscribe(() => {
      this.addForm.reset({ttl: 500});
      this.notificationService.success(`Record \`${value.name}\` was successfully created.`);
    });
  }

  protected save(): void {
    if (!this.editForm.valid) {
      return;
    }

    const value = this.editForm.value;

    this.zoneService.updateRecord(this.edit.value!, RecordType.CNAME, {
      name: value.name!,
      target: value.target!,
      ttl: value.ttl!,
    }).subscribe(() => {
      this.edit.next(null);
      this.notificationService.success(`Record \`${value.name}\` was successfully updated.`)
    });
  }
}
