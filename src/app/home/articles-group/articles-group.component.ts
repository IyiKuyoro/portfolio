import { Component } from '@angular/core';

import { ArticlesService } from '../../../services/articles.service';
import { IArticle } from '../../../models/IArticle.model';
import { IGetArticleResponse } from '../../../models/IGetArticleResponse.model';

@Component({
  selector: 'app-articles-group',
  templateUrl: './articles-group.component.html',
  styleUrls: ['./articles-group.component.css']
})
export class ArticlesGroupComponent {
  public articles: IArticle[] = [];
  public techArticles: IArticle[] = [];
  public otherArticles: IArticle[] = [];

  constructor(
    public articlesService: ArticlesService
  ) {
    this.articlesService.getAllArticles(1, 20)
      .subscribe((data: IGetArticleResponse) => {
        this.articles = data.data.articles;

        this.sortArticles();
      });
  }

  private sortArticles() {
    let noOfTechArticles = 0;
    let noOfOtherArticles = 0;

    this.articles.forEach((article) => {
      console.log(this.articles);
      if (article.category === 'tech' && noOfTechArticles < 10) {
        noOfTechArticles += 1;
        this.techArticles.push(article);
      } else if (article.category === 'inspirational' && noOfOtherArticles < 10) {
        noOfOtherArticles += 1;
        this.otherArticles.push(article);
      }
    });

    return { noOfTechArticles, noOfOtherArticles };
  }

  selectArticle(article: IArticle): void  {
    if (!article.external) {

    } else {
      window.location.href = article.link;
    }
  }
}
