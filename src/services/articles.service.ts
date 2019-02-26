import { Injectable } from '@angular/core';

import { IArticle } from '../../src/models/IArticle.model';
import { data } from '../assets/articles-data';

@Injectable()
export class ArticlesService {
  public techArticles: IArticle[] = [];
  public otherArticles: IArticle[] = [];

  constructor() {
    const articles = data;

    let noOfTechArticles = 0;
    let noOfOtherArticles = 0;

    articles.forEach((article) => {
      if (article.category === 'tech' && noOfTechArticles < 10) {
        noOfTechArticles += 1;
        this.techArticles.push(article);
      } else if (article.category === 'others' && noOfOtherArticles < 10) {
        noOfOtherArticles += 1;
        this.otherArticles.push(article);
      }
    });
  }
}
