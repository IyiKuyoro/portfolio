import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleResolverService } from '../../resolvers/article.resolver';

export const userRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: { resolvedData: ArticleResolverService }
  },
];
