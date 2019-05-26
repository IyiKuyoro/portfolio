import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ArticleResolverService } from '../../resolvers/article.resolver';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'new-article',
    component: EditArticleComponent,
  },
  {
    path: 'edit-article/:slug',
    component: EditArticleComponent,
    resolve: { resolvedData: ArticleResolverService }
  }
];
