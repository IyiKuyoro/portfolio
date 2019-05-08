import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

import { ArticleComponent } from './article.component';
import { HeaderComponent } from '../../header/header.component';
import { AuthService } from '../../../services/auth.service';
import mockAuthService from '../../../services/__mocks__/auth.service.mock';
import { AuthorsPipe } from '../../../pipes/authors.pipe';
import { ArticlesGroupComponent } from '../articles-group/articles-group.component';
import { FooterComponent } from '../../footer/footer.component';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { ArticlesService } from '../../../services/articles.service';
import { MockArticlesService } from '../../../services/__mocks__/articles.service.mock';
import { GlobalService } from '../../../services/global.service';
import { mockGlobalService } from '../../../services/__mocks__/global.service.mock';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
      ],
      declarations: [
        ArticleComponent,
        ArticlesGroupComponent,
        FooterComponent,
        HeaderComponent,
        AuthorsPipe,
        TruncatePipe,
      ],
      providers: [
        { provide: GlobalService, useValue: mockGlobalService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ArticlesService, useClass: MockArticlesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
