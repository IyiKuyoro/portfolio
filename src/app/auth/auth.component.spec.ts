import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthComponent } from './auth.component';
import { AuthService } from '../../../src/services/auth.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let element: HTMLElement;

  class MockAuthService {
    login() {
      return of({
        success: true,
        message: 'message',
      });
    }
  }
  const mockAuthService = new MockAuthService();
  class MockRouter {
    navigate() {
      console.log('stuff');
    }
  }
  const mockRouter = new MockRouter();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        FontAwesomeModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('password toggle', () => {
    it('should toggle password when icon is clicked', () => {
      component.togglePassword();

      expect(component.faEye).toEqual(faEyeSlash);
      component.togglePassword();

      expect(component.faEye).toEqual(faEye);
    });
  });

  describe('submit request', () => {
    it('should redirect to the dashboard', () => {
      spyOn(mockAuthService, 'login').and.callFake(() => {
        return of({
          success: true,
          message: 'message',
        });
      });
      spyOn(mockRouter, 'navigate');

      const username = fixture.debugElement.query(By.css('#username')).nativeElement;
      const password = fixture.debugElement.query(By.css('#password')).nativeElement;
      username.value = 'username';
      password.value = 'password';
      username.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      password.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      component.submit();
      fixture.detectChanges();

      expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    });

    it('should should call the handleError function', () => {
      spyOn(mockAuthService, 'login').and.callFake(() => {
        return of({
          success: false,
          message: 'message',
        });
      });
      spyOn(mockRouter, 'navigate');
      spyOn(component, 'handleError').and.callThrough();

      const username = fixture.debugElement.query(By.css('#username')).nativeElement;
      const password = fixture.debugElement.query(By.css('#password')).nativeElement;
      username.value = 'username';
      password.value = 'password';
      username.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      password.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      component.submit();
      fixture.detectChanges();

      expect(component.handleError).toHaveBeenCalled();
    });
  });
});
