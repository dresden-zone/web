import { Component } from '@angular/core';
import {share, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ZoneService} from "../../api/zone/zone.service";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
    this.route.params.subscribe(({zoneId}) => {
      this.zoneService.selectZone(zoneId);
    })
  }
}
