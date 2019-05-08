import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from '../../../src/services/auth.service';
import { IApiResponse } from '../../../src/models/IApiResponse.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    const authMessage = document.getElementById('authMessage');
    authMessage.style.display = 'none';
    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    this.authService.login(
      this.loginForm.controls['username'].value,
      this.loginForm.controls['password'].value,
    ).subscribe((data: IApiResponse) => {
      loader.style.display = 'none';

      if (data.success) {
        this.authService.authorize();
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.handleError();
      }
    }, this.handleError);
  }

  handleError() {
    this.authService.deAuthorize();
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
    const authMessage = document.getElementById('authMessage');
    authMessage.style.display = 'block';
  }

  togglePassword() {
    const password = document.getElementById('password');
    if (this.faEye === faEye) {
      password.setAttribute('type', 'text');
      this.faEye = faEyeSlash;
    } else {
      password.setAttribute('type', 'password');
      this.faEye = faEye;
    }
  }
}
