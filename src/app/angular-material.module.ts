import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatListModule, MatIconModule, MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
  ]
})
export class AngularMaterialModule { }
