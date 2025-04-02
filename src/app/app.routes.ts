import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { redirectIfAuthenticatedGuard } from './core/guards/redirectIfAuthenticatedGuard.guard';

export const routes: Routes = [
  {
    path: 'ingreso',
    loadChildren: () => import('./ui/pages/auth/auth.routes').then((auth) => auth.routes),
    canActivate: [redirectIfAuthenticatedGuard],
  },
  {
    path: 'inicio',
    loadChildren: () => import('./ui/pages/home/home.routes').then((home) => home.routes),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'ingreso',
    pathMatch: 'full',
  },
];
