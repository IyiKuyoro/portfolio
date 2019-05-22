import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatListModule, MatIconModule, MatRadioModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatDialogModule,
  ]
})
export class AngularMaterialModule { }
