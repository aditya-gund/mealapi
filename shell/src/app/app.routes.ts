import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'delivery',
    loadChildren: () => import('delivery/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'pricing',
    loadChildren: () => import('pricing/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'food-menu',
    loadChildren: () => import('food_menu/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'user-auth',
    loadChildren: () => import('user_auth/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
