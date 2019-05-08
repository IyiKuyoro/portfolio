import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from '../../src/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private globalService: GlobalService,
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
}
