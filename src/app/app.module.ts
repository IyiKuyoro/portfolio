import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  providers: [
    AuthService,
    ArticlesService,
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
