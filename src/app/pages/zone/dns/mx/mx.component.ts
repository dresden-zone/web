import {Component} from '@angular/core';
import {ZoneService} from "../../../../api/zone/zone.service";
import {share} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RecordType} from "../../../../api/zone/zone.domain";

@Component({
  selector: 'app-mx',
  templateUrl: './mx.component.html',
  styleUrls: ['../style.scss']
})
export class MxComponent {

  protected readonly records = this.zoneService.getRecords(RecordType.MX);

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}
