import {Component, OnDestroy, OnInit} from '@angular/core';
import {ZoneService} from "../../../../api/zone/zone.service";
import {BehaviorSubject, filter, map, Subscription, switchMap} from "rxjs";
import {RecordType} from "../../../../api/zone/zone.domain";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['../style.scss']
})
export class AComponent implements OnInit, OnDestroy {

  protected readonly records = this.zoneService.getRecords(RecordType.A);

  protected readonly edit = new BehaviorSubject<string | null>(null);
  protected readonly editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    ttl: new FormControl(500, [Validators.required]),
  });

  protected readonly addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    ttl: new FormControl(500, [Validators.required]),
  });

  private subscription: Subscription | undefined;

  constructor(
    private readonly zoneService: ZoneService,
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
            address: record.value.address,
            ttl: record.record.ttl,
          })
        },
      });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  protected save(): void {
    if (!this.editForm.valid) {
      return;
    }

    const value = this.editForm.value;

    this.zoneService.updateRecord(this.edit.value!, RecordType.A, {
      name: value.name!,
      address: value.address!,
      ttl: value.ttl!,
    }).subscribe(record => {
      this.edit.next(null);
    });
  }

  delete() {
    this.zoneService.deleteRecord(this.edit.value!, RecordType.A).subscribe();
  }

  add() {
    if (!this.addForm.valid) {
      return;
    }

    const value = this.addForm.value;

    this.zoneService.addRecord(RecordType.A, {
      name: value.name!,
      address: value.address!,
      ttl: value.ttl!,
    }).subscribe(() => this.addForm.reset({ttl: 500}));
  }
}
