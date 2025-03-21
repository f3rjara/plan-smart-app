import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
