import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-articles-group',
  templateUrl: './articles-group.component.html',
  styleUrls: ['./articles-group.component.css']
})
export class ArticlesGroupComponent implements OnInit {
  constructor(
    public articlesService: ArticlesService
  ) { }

  ngOnInit() {
  }

  selectArticle(url: string): void  {
    window.location.href = url;
  }
}
