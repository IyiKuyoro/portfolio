import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatList, MatListModule, MatIcon, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class AngularMaterialModule { }
