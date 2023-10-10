import {Component} from '@angular/core';
import {ZoneService} from "../../api/zone/zone.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  protected readonly zones = this.zoneService.getZones();

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}

