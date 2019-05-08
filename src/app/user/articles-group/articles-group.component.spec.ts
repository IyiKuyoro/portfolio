import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { ArticlesGroupComponent } from './articles-group.component';
import { ArticlesService } from '../../../services/articles.service';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { MockArticlesService } from '../../../services/__mocks__/articles.service.mock';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticlesGroupComponent', () => {
  let component: ArticlesGroupComponent;
  let fixture: ComponentFixture<ArticlesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlesGroupComponent,
        TruncatePipe
      ],
      imports: [
        RouterTestingModule,
        CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'iyikuyoro'}),
      ],
      providers: [
        { provide: ArticlesService, useClass: MockArticlesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one article in tech', () => {
    expect(component.techArticles.length).toBe(1);
  });

  it('should have two article in inspirational', () => {
    expect(component.otherArticles.length).toBe(1);
  });
});
