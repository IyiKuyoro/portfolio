import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ArticlesService } from '../../../services/articles.service';
import { IArticle } from '../../../models/Article.model';
import { IGetArticleResponse } from '../../../models/IGetArticleResponse.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-articles-group',
  templateUrl: './articles-group.component.html',
  styleUrls: ['./articles-group.component.css']
})
export class ArticlesGroupComponent {
  public articles: IArticle[] = [];
  public techArticles: IArticle[] = [];
  public otherArticles: IArticle[] = [];
  public faTrash = faTrashAlt;

  constructor(
    public articlesService: ArticlesService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.articlesService.getAllArticles(1, 20)
      .subscribe((data: IGetArticleResponse) => {
        if (data) {
          this.articles = data.data.articles;

          this.sortArticles();
        }
      });
  }

  private sortArticles() {
    let noOfTechArticles = 0;
    let noOfOtherArticles = 0;

    this.articles.forEach((article) => {
      if (article.category === 'tech' && noOfTechArticles < 10) {
        noOfTechArticles += 1;
        this.techArticles.push(article);
      } else if (article.category !== 'tech' && noOfOtherArticles < 10) {
        noOfOtherArticles += 1;
        this.otherArticles.push(article);
      }
    });

    return { noOfTechArticles, noOfOtherArticles };
  }

  selectArticle(article: IArticle): void  {
    if (!article.external) {
      this.router.navigate(['/article', article.slug]);
    } else {
      window.location.href = article.link;
    }
  }

  isAuthorized() {
    return this.authService.checkAuthorization();
  }

  onDelete(slug: string, category: string, index: number, event: Event) {
    this.articlesService.deleteArticle(slug).subscribe((data: { success: boolean, message: string }) => {
      if (data.success) {
        if (category === 'tech') {
          this.techArticles.splice(index, 1);

        } else {
          this.otherArticles.splice(index, 1);
        }
        event.stopPropagation();
      }
    });
  }
}
