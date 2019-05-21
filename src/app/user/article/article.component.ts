import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import TimePast from 'time_past';

import { IArticle } from '../../../models/IArticle.model';
import { ArticlesService } from '../../../services/articles.service';
import { IApiArticleResponse } from '../../../models/IApiArticleResponse.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleSlug: string;
  article: IArticle;
  timePast: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) {
    this.article = this.route.snapshot.data['resolvedData'].article;
  }

  ngOnInit() {
  }

  isAdmin() {
    return !!this.authService.checkAuthorization();
  }

  editArticle() {
    this.router.navigate(['/admin/edit-article', this.article.slug]);
  }
}
