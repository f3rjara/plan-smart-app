import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'iniciar-sesion',
        loadComponent: () => import('./sign-in/sign-in.component').then((cp) => cp.SignInComponent),
      },
      {
        path: 'registro',
        loadComponent: () => import('./sign-up/sign-up.component').then((cp) => cp.SignUpComponent),
      },
      {
        path: '**',
        redirectTo: 'iniciar-sesion',
        pathMatch: 'full',
      },
    ],
  },
];
