import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav, MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { faFeather, faPlus } from '@fortawesome/free-solid-svg-icons';

import { GlobalService } from '../../src/services/global.service';
import { AuthService } from '../../src/services/auth.service';
import { AddArticleComponent } from './admin/add-article/add-article.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public faFeather = faFeather;
  public faPlus = faPlus;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private globalService: GlobalService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {
    this.matIconRegistry.addSvgIcon(
      'doc',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/file-alt-regular.svg')
    );
  }

  ngOnInit() {
    this.globalService.openNav.subscribe((newValue) => {
      if (newValue === true) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  closeSideNav() {
    this.globalService.changeSideNav(false);
  }

  isAuthenticated() {
    return this.authService.checkAuthorization();
  }

  addArticle() {
    this.closeSideNav();
    this.dialog.open(AddArticleComponent);
  }
}
