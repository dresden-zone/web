import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DnsRoutingModule } from './dns-routing.module';
import { DnsComponent } from './dns.component';
import {ButtonComponent} from "@feel/form";
import {IconAddComponent} from "../../../core/icons/icon-add/icon-add.component";


@NgModule({
  declarations: [
    DnsComponent
  ],
  imports: [
    CommonModule,
    DnsRoutingModule,
    ButtonComponent,
    IconAddComponent
  ]
})
export class DnsModule { }
