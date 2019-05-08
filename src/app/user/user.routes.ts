import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

export const userRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:slug', component: ArticleComponent },
];
