import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';

import { ArticlesGroupComponent } from './articles-group.component';
import { ArticlesService } from '../../../services/articles.service';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

describe('ArticlesGroupComponent', () => {
  let component: ArticlesGroupComponent;
  let fixture: ComponentFixture<ArticlesGroupComponent>;

  beforeEach(async(() => {
    const mockArticleService = {};

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
});
