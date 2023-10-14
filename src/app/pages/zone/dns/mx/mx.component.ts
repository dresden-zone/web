import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoneService} from "../../../../api/zone/zone.service";
import {switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RecordType} from "../../../../api/zone/zone.domain";

@Component({
  selector: 'app-mx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mx.component.html',
  styleUrls: ['../style.scss']
})
export class MxComponent {

  protected readonly records = this.route.parent?.parent?.parent?.params.pipe(
    switchMap(({id}) => this.zoneService.getRecords(id, RecordType.MX)),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
  }
}
