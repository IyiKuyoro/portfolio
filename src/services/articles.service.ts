import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ArticlesService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAllArticles(page: number, count: number): Observable<object> {
    const url = `${environment.backendUrl}/articles`;
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('page', page.toString());
    params = params.append('count', count.toString());

    return this.http.get(url, { params });
  }

  getArticle(slug: string): Observable<object> {
    const url = `${environment.backendUrl}/articles/${slug}`;

    return this.http.get(url);
  }
}
