import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { IProjectApiResponse } from '../models/IProject.model';

@Injectable()
export class ProjectService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllProjects(): Observable<IProjectApiResponse> {
    const url = `${environment.backendUrl}/project`;

    return this.http.get<IProjectApiResponse>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message);
  }
}
