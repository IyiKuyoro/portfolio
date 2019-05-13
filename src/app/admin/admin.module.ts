import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
  ],
  providers: [],
})
export class AdminModule { }

