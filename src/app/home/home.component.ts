import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css'
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'doc',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/file-alt-regular.svg')
    );
  }

  ngOnInit() {
  }

  closeSideNav() {
    this.sidenav.close();
  }
}
