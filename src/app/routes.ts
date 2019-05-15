import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AdminGuard } from './admin/adminActivator.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AdminGuard],
  },
  { path: 'login', component: AuthComponent },
];
