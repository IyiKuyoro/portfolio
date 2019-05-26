import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { INewArticle, NewExternalArticle } from '../models/Article.model';
import { IApiArticleResponse } from '../models/IApiArticleResponse.model';

@Injectable()
export class ArticlesService {
  constructor(
    private http: HttpClient,
  ) {}

  getAllArticles(page: number, count: number): Observable<object> {
    const url = `${environment.backendUrl}/articles`;
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('page', page.toString());
    params = params.append('count', count.toString());

    return this.http.get(url, { params });
  }

  getArticle(slug: string): Observable<IApiArticleResponse> {
    const url = `${environment.backendUrl}/articles/${slug}`;

    return this.http.get<IApiArticleResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  postArticle(article: INewArticle) {
    const url = `${environment.backendUrl}/articles`;

    if (article.imageUrl) {
      return this.http.post(
        url,
        {
          title: article.title,
          authors: article.authors,
          category: article.category,
          body: article.body,
          imageUrl: article.imageUrl,
        },
      );
    }

    return this.http.post(
      url,
      {
        title: article.title,
        authors: article.authors,
        category: article.category,
        body: article.body,
      },
    );
  }

  postExternalArticle(article: NewExternalArticle) {
    const url = `${environment.backendUrl}/articles`;

    if (article.imageUrl) {
      return this.http.post(
        url,
        {
          title: article.title,
          authors: 'Opeoluwa Iyi-Kuyoro',
          category: article.category,
          link: article.link,
          imageUrl: article.imageUrl,
        },
      ).pipe(
        catchError(this.handleError)
      );
    }

    console.log(article);

    return this.http.post(
      url,
      {
        title: article.title,
        authors: 'Opeoluwa Iyi-Kuyoro',
        category: article.category,
        link: article.link,
      },
    ).pipe(
      catchError(this.handleError)
    );
  }

  updateArticle(article: INewArticle, slug: string) {
    const url = `${environment.backendUrl}/articles/${slug}`;

    if (article.imageUrl) {
      return this.http.put(
        url,
        {
          title: article.title,
          authors: article.authors,
          category: article.category,
          body: article.body,
          imageUrl: article.imageUrl,
        },
      );
    }

    return this.http.put(
      url,
      {
        title: article.title,
        authors: article.authors,
        category: article.category,
        body: article.body,
      },
    );
  }

  deleteArticle(slug: string) {
    const url = `${environment.backendUrl}/articles/${slug}`;

    return this.http.delete(
      url
    );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }
}
