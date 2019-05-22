import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddArticleComponent } from '../admin/add-article/add-article.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: string;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.route = this.router.url;
  }

  openSideNav() {
    this.globalService.changeSideNav(true);
  }

  openAddArticleModal() {
    this.dialog.open(AddArticleComponent, {
      width: '820px',
    });
  }
}
