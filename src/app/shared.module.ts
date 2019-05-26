import { NgModule } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
    CKEditorModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CKEditorModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
})
export class SharedModule { }
