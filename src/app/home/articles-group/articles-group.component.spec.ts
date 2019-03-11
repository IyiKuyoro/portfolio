import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { ArticlesGroupComponent } from './articles-group.component';
import { ArticlesService } from '../../../services/articles.service';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { data } from '../../../assets/articles-data';
import { By } from '@angular/platform-browser';

describe('ArticlesGroupComponent', () => {
  let component: ArticlesGroupComponent;
  let fixture: ComponentFixture<ArticlesGroupComponent>;

  beforeEach(async(() => {
    const mockArticleService = {
      articles: data
    };

    TestBed.configureTestingModule({
      declarations: [
        ArticlesGroupComponent,
        TruncatePipe
      ],
      imports: [
        CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'iyikuyoro'}),
      ],
      providers: [
        { provide: ArticlesService, useValue: mockArticleService }
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

  describe('selectArticle', () => {
    it('should call the selectArticle method when an article is clicked', () => {
      spyOn(component, 'selectArticle');
      const articles = fixture.debugElement.queryAll(By.css('a'));

      articles[0].triggerEventHandler('click', {});

      expect(component.selectArticle).toHaveBeenCalledWith(component.otherArticles[0].link);
    });
  });
});
