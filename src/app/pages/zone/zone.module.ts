import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZoneRoutingModule} from './zone-routing.module';
import {ZoneComponent} from './zone.component';
import {IconGearComponent} from "../../core/icons/icon-gear/icon-gear.component";
import {IconDashboardComponent} from "../../core/icons/icon-dashboard/icon-dashboard.component";
import {IconListComponent} from "../../core/icons/icon-list/icon-list.component";
import {ButtonComponent} from "@feel/form";

@NgModule({
  declarations: [
    ZoneComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule,
    IconGearComponent,
    IconDashboardComponent,
    IconListComponent,
    ButtonComponent
  ]
})
export class ZoneModule {
}
