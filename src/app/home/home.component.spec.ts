import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { HomeComponent } from './home.component';
import { ArticlesService } from '../../services/articles.service';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  @Component({
    selector: 'app-articles-group',
    template: '<div></div>'
  })
  class ArticlesGroupComponent {}

  beforeEach(async(() => {
    const mockArticleService = {};

    TestBed.configureTestingModule({
      declarations: [
        ArticlesGroupComponent,
        AuthComponent,
        DashboardComponent,
        HomeComponent,
        TruncatePipe
      ],
      providers: [
        { provide: ArticlesService, useValue: mockArticleService }
      ],
      imports: [
        AppRoutingModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
        CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'iyikuyoro'}),
        FontAwesomeModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the sidenav', () => {
    spyOn(component.sidenav, 'close');
    component.closeSideNav();

    expect(component.sidenav.close).toHaveBeenCalledTimes(1);
  });
});
