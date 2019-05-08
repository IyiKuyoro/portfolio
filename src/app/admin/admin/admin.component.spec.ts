import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary as CloudinaryCore } from 'cloudinary-core';

import { AdminComponent } from './admin.component';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CloudinaryModule.forRoot(cloudinary, { cloud_name: 'iyikuyoro'}),
        RouterTestingModule,
      ],
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
