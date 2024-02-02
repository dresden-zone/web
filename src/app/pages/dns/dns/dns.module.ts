import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DnsRoutingModule} from './dns-routing.module';
import {DnsComponent} from './dns.component';
import {ButtonComponent, TextFieldComponent} from "@feel/form";
import {IconAddComponent} from "../../../core/icons/icon-add/icon-add.component";
import {AComponent} from "./a/a.component";
import {AaaaComponent} from "./aaaa/aaaa.component";
import {CnameComponent} from "./cname/cname.component";
import {MxComponent} from "./mx/mx.component";
import {TxtComponent} from "./txt/txt.component";
import {ReactiveFormsModule} from "@angular/forms";
import {IconTrashComponent} from "../../../core/icons/icon-trash/icon-trash.component";
import {IconPenComponent} from "../../../core/icons/icon-pen/icon-pen.component";
import {IconSaveComponent} from "../../../core/icons/icon-save/icon-save.component";
import {IconCloseComponent} from "../../../core/icons/icon-close/icon-close.component";

@NgModule({
  declarations: [
    DnsComponent,
    AComponent,
    AaaaComponent,
    CnameComponent,
    MxComponent,
    TxtComponent,
  ],
  exports: [
    CnameComponent
  ],
  imports: [
    CommonModule,
    DnsRoutingModule,
    ButtonComponent,
    IconAddComponent,
    ReactiveFormsModule,
    TextFieldComponent,
    IconTrashComponent,
    IconPenComponent,
    IconSaveComponent,
    IconCloseComponent
  ]
})
export class DnsModule {
}
