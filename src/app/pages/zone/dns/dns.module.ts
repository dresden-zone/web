import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DnsRoutingModule } from './dns-routing.module';
import { DnsComponent } from './dns.component';


@NgModule({
  declarations: [
    DnsComponent
  ],
  imports: [
    CommonModule,
    DnsRoutingModule
  ]
})
export class DnsModule { }
