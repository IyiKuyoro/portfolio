import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: string;

  constructor(
    private globalService: GlobalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route = this.router.url;
  }

  openSideNav() {
    this.globalService.changeSideNav(true);
  }
}
