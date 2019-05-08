import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IArticle } from '../../../models/IArticle.model';
import { ArticlesService } from '../../../services/articles.service';
import { IApiArticleResponse } from '../../../models/IApiArticleResponse.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleSlug: string;
  article: IArticle;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticlesService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.articleSlug = params.get('slug');
    });

    this.getArticle();
  }

  getArticle() {
    this.articleService.getArticle(this.articleSlug).subscribe((data: IApiArticleResponse) => {
      this.article = data.data;
      console.log(this.article.imageUrl);
    });
  }
}
