import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {ZoneService} from "../../api/zone/zone.service";
import {routingAnimation} from "../../animation/routing.animation";
import {Subscription} from "rxjs";
import {IconDresdenZoneComponent} from "../../core/icons/icon-dresden-zone/icon-dresden-zone.component";
import {ButtonComponent} from "@feel/form";
import {IconDashboardComponent} from "../../core/icons/icon-dashboard/icon-dashboard.component";
import {IconListComponent} from "../../core/icons/icon-list/icon-list.component";
import {IconGearComponent} from "../../core/icons/icon-gear/icon-gear.component";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
  animations: [routingAnimation],
  standalone: true,
  imports: [
    IconDresdenZoneComponent,
    ButtonComponent,
    IconDashboardComponent,
    IconListComponent,
    IconGearComponent,
    RouterOutlet
  ]
})
export class ZoneComponent implements OnDestroy {

  private readonly subscription: Subscription | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly zoneService: ZoneService,
  ) {
    this.subscription = this.route.params.subscribe(({zoneId}) =>
      this.zoneService.selectZone(zoneId)
    );
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
