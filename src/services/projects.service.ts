import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { IProjectApiResponse } from '../models/IProject.model';

@Injectable()
export class ProjectService {
  constructor(
    private http: HttpClient,
  ) { }

  getAllProjects(): Observable<IProjectApiResponse> {
    const url = `${environment.backendUrl}/project`;

    return this.http.get<IProjectApiResponse>(url);
  }
}
