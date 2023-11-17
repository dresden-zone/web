import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {IconDresdenZoneComponent} from "../../core/icons/icon-dresden-zone/icon-dresden-zone.component";
import {ButtonComponent} from "@feel/form";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IconDresdenZoneComponent,
    ButtonComponent
  ]
})
export class DashboardModule {
}
