import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./ui/pages/auth/auth.routes').then((auth) => auth.routes),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./ui/pages/home/home.routes').then((home) => home.routes),
  },
  {
    path: '**',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
];
