import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminRoutingModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class AdminModule { }

