import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    const url = `${environment.backendUrl}/auth/signin`;
    return this.http.post(url, {
      userName: username,
      password,
    });
  }

  authorize() {
    sessionStorage.setItem('authorized', 'true');
  }

  deAuthorize() {
    sessionStorage.setItem('authorized', 'false');
  }

  checkAuthorization() {
    const auth = sessionStorage.getItem('authorized');

    if (auth === 'true') {
      return true;
    }

    return false;
  }
}
