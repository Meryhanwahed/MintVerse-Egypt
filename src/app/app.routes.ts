import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'marketplace',
    loadComponent: () =>
      import('./pages/marketplace//marketplace').then(m => m.Marketplace),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-us/contact-us').then(m => m.ContactUs),
  }
]
},
{
    path: '',
    component: AuthLayout,
    children: [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login),
  },
   {
    path: 'signup',
    loadComponent: () =>
      import('./pages/signup/signup').then(m => m.Signup),
  }
]
},

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];
