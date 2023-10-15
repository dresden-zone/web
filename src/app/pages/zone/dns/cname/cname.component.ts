import {Component} from '@angular/core';
import {RecordType} from "../../../../api/zone/zone.domain";
import {ZoneService} from "../../../../api/zone/zone.service";

@Component({
  selector: 'app-cname',
  templateUrl: './cname.component.html',
  styleUrls: ['../style.scss']
})
export class CnameComponent {

  protected readonly records = this.zoneService.getRecords(RecordType.CNAME);

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}
