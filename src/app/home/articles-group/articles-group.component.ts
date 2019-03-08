import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../../services/articles.service';
import { IArticle } from '../../../models/IArticle.model';

@Component({
  selector: 'app-articles-group',
  templateUrl: './articles-group.component.html',
  styleUrls: ['./articles-group.component.css']
})
export class ArticlesGroupComponent implements OnInit {
  public techArticles: IArticle[] = [];
  public otherArticles: IArticle[] = [];

  constructor(
    public articlesService: ArticlesService
  ) {
    let noOfTechArticles = 0;
    let noOfOtherArticles = 0;

    this.articlesService.articles.forEach((article) => {
      if (article.category === 'tech' && noOfTechArticles < 10) {
        noOfTechArticles += 1;
        this.techArticles.push(article);
      } else if (article.category === 'others' && noOfOtherArticles < 10) {
        noOfOtherArticles += 1;
        this.otherArticles.push(article);
      }
    });
  }

  ngOnInit() {
  }

  selectArticle(url: string): void  {
    window.location.href = url;
  }
}
