import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoneService} from "../../../../api/zone/zone.service";
import {switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RecordType} from "../../../../api/zone/zone.domain";

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrls: ['../style.scss']
})
export class AComponent {

  protected readonly records = this.route.parent?.parent?.parent?.params.pipe(
    switchMap(({id}) => this.zoneService.getRecords(id, RecordType.A)),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
  }
}
