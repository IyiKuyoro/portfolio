import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  login(username, password) {
    const url = `${environment.backendUrl}/auth/signin`;
    return this.http.post(url, {
      userName: username,
      password,
    });
  }
}
