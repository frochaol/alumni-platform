import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '@core/layout';
import { AdminLayoutComponent } from '@core/layout';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/public/public.routes').then((m) => m.PUBLIC_ROUTES),
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
