import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesService } from '../../src/services/articles.service';
import { AuthService } from '../../src/services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { GlobalService } from '../../src/services/global.service';
import { AngularMaterialModule } from './angular-material.module';
import { SharedModule } from './shared.module';
import { AuthInterceptor } from '../services/auth.interceptor';
import { ImageUploadService } from '../services/image-upload.service';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { AdminModule } from './admin/admin.module';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    AdminModule,
  ],
  providers: [
    AuthService,
    ArticlesService,
    GlobalService,
    ImageUploadService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  entryComponents: [
    AddArticleComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
