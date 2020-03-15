import { Routes } from '@angular/router';

export const allRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../intranet/intranet.module').then(m => m.IntranetModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule),
  },
];
