import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { ArticlesService } from '../services/articles.service';
import { IArticleResolved } from '../models/IArticle.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolverService implements Resolve<IArticleResolved> {
  constructor(
    private articleService: ArticlesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IArticleResolved> {
    const slug = route.paramMap.get('slug');
    return this.articleService.getArticle(slug)
      .pipe(
        map(response => ({article: response.data}))
      );
  }
}
