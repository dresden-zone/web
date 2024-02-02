import {Routes} from '@angular/router';
import {ZoneComponent} from "./zone.component";

export const routes: Routes = [{
  path: '',
  component: ZoneComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'dns', loadChildren: () => import('./dns/dns.module').then(m => m.DnsModule)},
    {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
    {path: 'setup', loadChildren: () => import('./setup/setup.module').then(m => m.SetupModule)}
  ]
}];
