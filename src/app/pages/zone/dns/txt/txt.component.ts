import {Component} from '@angular/core';
import {RecordType} from "../../../../api/zone/zone.domain";
import {ZoneService} from "../../../../api/zone/zone.service";

@Component({
  selector: 'app-txt',
  templateUrl: './txt.component.html',
  styleUrls: ['../style.scss']
})
export class TxtComponent {

  protected readonly records = this.zoneService.getRecords(RecordType.TXT);

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}
