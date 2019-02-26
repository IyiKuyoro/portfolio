import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { HomeComponent } from './home.component';
import { ArticlesService } from '../../services/articles.service';
import { AppRoutingModule } from '../app-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { ArticlesGroupComponent } from './articles-group/articles-group.component';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const mockArticleService = {};

    TestBed.configureTestingModule({
      declarations: [
        ArticlesGroupComponent,
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
        HttpClientModule
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
});
