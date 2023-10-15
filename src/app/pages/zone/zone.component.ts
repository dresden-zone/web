import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ZoneService} from "../../api/zone/zone.service";
import {routingAnimation} from "../../animation/routing.animation";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss'],
  animations: [routingAnimation],
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
