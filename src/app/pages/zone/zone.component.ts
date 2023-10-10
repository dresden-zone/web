import { Component } from '@angular/core';
import {switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ZoneService} from "../../api/zone/zone.service";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {

  protected readonly zone = this.route.params.pipe(
    switchMap(({id}) => this.zoneService.getZone(id)),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
  }
}
