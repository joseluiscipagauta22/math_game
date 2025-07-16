import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.component').then((m) => m.InicioComponent),
      },
      {
        path: 'info',
        loadComponent: () => import('./info/info.component').then((m) => m.InfoComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'test',
        loadComponent: () => import('./test/test.component').then((m) => m.TestComponent),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
