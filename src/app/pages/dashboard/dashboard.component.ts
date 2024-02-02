import {Component} from '@angular/core';
import {ZoneService} from "../../api/zone/zone.service";
import {IconDresdenZoneComponent} from "../../core/icons/icon-dresden-zone/icon-dresden-zone.component";
import {ButtonComponent} from "@feel/form";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    IconDresdenZoneComponent,
    ButtonComponent,
    AsyncPipe,
    NgForOf
  ]
})
export class DashboardComponent {

  protected readonly zones = this.zoneService.getZones();

  constructor(
    private readonly zoneService: ZoneService,
  ) {
  }
}

