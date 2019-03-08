import { Injectable } from '@angular/core';

import { IArticle } from '../../src/models/IArticle.model';
import { data } from '../assets/articles-data';

@Injectable()
export class ArticlesService {
  articles: IArticle[];

  constructor() {
    this.articles = data;
  }
}
