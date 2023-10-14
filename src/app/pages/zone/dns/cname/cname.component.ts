import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {switchMap} from "rxjs";
import {RecordType} from "../../../../api/zone/zone.domain";
import {ActivatedRoute} from "@angular/router";
import {ZoneService} from "../../../../api/zone/zone.service";

@Component({
  selector: 'app-cname',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cname.component.html',
  styleUrls: ['../style.scss']
})
export class CnameComponent {

  protected readonly records = this.route.parent?.parent?.parent?.params.pipe(
    switchMap(({id}) => this.zoneService.getRecords(id, RecordType.CNAME)),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
  }
}
