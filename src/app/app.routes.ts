import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: ':zoneId', loadChildren: () => import('./pages/zone/zone.module').then(m => m.ZoneModule)},
  {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
];
