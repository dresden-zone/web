import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DnsComponent} from './dns.component';
import {AComponent} from "./a/a.component";
import {AaaaComponent} from "./aaaa/aaaa.component";
import {CnameComponent} from "./cname/cname.component";
import {MxComponent} from "./mx/mx.component";
import {TxtComponent} from "./txt/txt.component";

const routes: Routes = [{
  path: '',
  component: DnsComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'a'},
    {path: 'a', component: AComponent},
    {path: 'aaaa', component: AaaaComponent},
    {path: 'cname', component: CnameComponent},
    {path: 'mx', component: MxComponent},
    {path: 'txt', component: TxtComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DnsRoutingModule {
}
