import {Component} from '@angular/core';
import {RecordType} from "../../../../api/zone/zone.domain";
import {ZoneService} from "../../../../api/zone/zone.service";

@Component({
  selector: 'app-aaaa',
  templateUrl: './aaaa.component.html',
  styleUrls: ['../style.scss']
})
export class AaaaComponent {

  protected readonly records = this.zoneService.getRecords(RecordType.AAAA);

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}
