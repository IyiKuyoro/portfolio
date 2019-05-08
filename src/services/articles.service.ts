import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable()
export class ArticlesService {
  constructor(
    private http: HttpClient,
  ) {
  }

  getAllArticles(page: number, count: number) {
    const url = `${environment.backendUrl}/articles`;
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('page', page.toString());
    params = params.append('count', count.toString());

    return this.http.get(url, { params });
  }
}
