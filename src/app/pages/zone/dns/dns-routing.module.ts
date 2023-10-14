import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DnsComponent} from './dns.component';

const routes: Routes = [{
  path: '',
  component: DnsComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'a'},
    {path: 'a', loadComponent: () => import("./a/a.component").then(c => c.AComponent)},
    {path: 'aaaa', loadComponent: () => import("./aaaa/aaaa.component").then(c => c.AaaaComponent)},
    {path: 'cname', loadComponent: () => import("./cname/cname.component").then(c => c.CnameComponent)},
    {path: 'mx', loadComponent: () => import("./mx/mx.component").then(c => c.MxComponent)},
    {path: 'txt', loadComponent: () => import("./txt/txt.component").then(c => c.TxtComponent)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DnsRoutingModule {
}
