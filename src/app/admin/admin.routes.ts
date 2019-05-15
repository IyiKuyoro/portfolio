import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'new-article',
    component: EditArticleComponent,
  },
];
