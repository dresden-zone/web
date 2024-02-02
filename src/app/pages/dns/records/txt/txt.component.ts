import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecordType} from "../../../../api/zone/zone.domain";
import {ZoneService} from "../../../../api/zone/zone.service";
import {BehaviorSubject, filter, map, Subscription, switchMap} from "rxjs";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NotificationService} from "@feel/notification";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ButtonComponent, TextFieldComponent} from "@feel/form";
import {IconSaveComponent} from "../../../../core/icons/icon-save/icon-save.component";
import {IconTrashComponent} from "../../../../core/icons/icon-trash/icon-trash.component";
import {IconCloseComponent} from "../../../../core/icons/icon-close/icon-close.component";
import {IconPenComponent} from "../../../../core/icons/icon-pen/icon-pen.component";
import {IconAddComponent} from "../../../../core/icons/icon-add/icon-add.component";
import {LoadingComponent} from "../../../../core/loading/loading.component";

@Component({
  selector: 'app-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['../style.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    TextFieldComponent,
    ButtonComponent,
    IconSaveComponent,
    IconTrashComponent,
    IconCloseComponent,
    IconPenComponent,
    IconAddComponent,
    LoadingComponent
  ]
})
export class TxtComponent implements OnInit, OnDestroy {

  protected readonly records = this.zoneService.getRecords(RecordType.TXT);

  protected readonly edit = new BehaviorSubject<string | null>(null);
  protected readonly editForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    ttl: new FormControl(500, [Validators.required]),
  });

  protected readonly addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
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
            content: record.value.content,
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
      switchMap(record => this.zoneService.deleteRecord(id, RecordType.TXT).pipe(map(() => record)))
    ).subscribe(record => this.notificationService.success(`Record \`${record.record.name}\` was successfully deleted.`));
  }

  add() {
    if (!this.addForm.valid) {
      return;
    }

    const value = this.addForm.value;

    this.zoneService.addRecord(RecordType.TXT, {
      name: value.name!,
      content: value.content!,
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

    this.zoneService.updateRecord(this.edit.value!, RecordType.TXT, {
      name: value.name!,
      content: value.content!,
      ttl: value.ttl!,
    }).subscribe(() => {
      this.edit.next(null);
      this.notificationService.success(`Record \`${value.name}\` was successfully updated.`)
    });
  }
}
