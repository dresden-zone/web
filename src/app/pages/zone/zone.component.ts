import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ZoneService} from "../../api/zone/zone.service";
import {routingAnimation} from "../../animation/routing.animation";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
  animations: [routingAnimation],
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
