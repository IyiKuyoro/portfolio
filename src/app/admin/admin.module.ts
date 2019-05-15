import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    QuillModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    CommonModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
    EditArticleComponent,
  ],
  providers: [],
})
export class AdminModule { }

