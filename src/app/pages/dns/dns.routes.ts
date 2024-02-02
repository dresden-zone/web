import {Routes} from '@angular/router';
import {DnsComponent} from "./dns.component";

export const routes: Routes = [{
  path: '',
  component: DnsComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'records', loadChildren: () => import('./records/records.routes').then(m => m.routes)},
    {path: 'settings', loadChildren: () => import('./settings/settings.routes').then(m => m.routes)},
    {path: 'setup', loadChildren: () => import('./setup/setup.routes').then(m => m.routes)}
  ]
}];
