import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { GlobalService } from '../../src/services/global.service';
import { mockGlobalService } from '../../src/services/__mocks__/global.service.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
        RouterTestingModule,
      ],
      providers: [
        { provide: GlobalService, useValue: mockGlobalService }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
