import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

import { TruncatePipe } from '../../pipes/truncate.pipe';
import { ArticlesGroupComponent } from './articles-group/articles-group.component';
import { UserRoutingModule } from './user-routeing.module';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AuthorsPipe } from '../../pipes/authors.pipe';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared.module';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
    UserRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    ArticlesGroupComponent,
    HomeComponent,
    TruncatePipe,
    AuthorsPipe,
    ArticleComponent,
  ],
  providers: [],
})
export class UserModule { }
