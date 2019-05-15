import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared.module';
import { EditArticleComponent } from './dashboard/edit-article/edit-article.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
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

