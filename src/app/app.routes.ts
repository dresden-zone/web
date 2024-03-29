import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.routes)},
  {path: 'dns/:zoneId', loadChildren: () => import('./pages/dns/dns.routes').then(m => m.routes)},
  {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
];
