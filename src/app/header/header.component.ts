import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AddArticleComponent } from '../admin/add-article/add-article.component';
import { GlobalService } from '../../services/global.service';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService,
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

  isAuthenticated(): string {
    return this.authService.checkAuthorization();
  }
}
