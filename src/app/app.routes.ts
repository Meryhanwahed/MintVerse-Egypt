import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'marketplace',
    loadComponent: () =>
      import('./pages/marketplace//marketplace').then(m => m.Marketplace),
  }
];
