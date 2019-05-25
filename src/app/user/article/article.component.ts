import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

import { IArticle } from '../../../models/Article.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleSlug: string;
  article: IArticle;
  Editor = BalloonEditor;

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
