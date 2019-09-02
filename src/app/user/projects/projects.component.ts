import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../services/projects.service';
import { IProject, IProjectApiResponse } from '../../../models/IProject.model';
import { catchError } from 'rxjs/operators';
import { Observable, ObservableInput, throwError } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  loading: boolean;
  projects: IProject[];
  errorMessage: string;

  constructor(
    private projectService: ProjectService,
  ) {}

  ngOnInit() {
    this.loading = true;

    this.projectService.getAllProjects()
      .pipe(
        catchError(this.handleError)
      )
      .subscribe((res: IProjectApiResponse) => {
        if (res.data.length === 0) {
          this.errorMessage = 'There are no projects at this time.';
        } else {
          this.projects = res.data;
        }
        this.loading = false;
      });
  }

  handleError = (error: any, co: Observable<IProjectApiResponse>): ObservableInput<any> => {
    this.errorMessage = 'An error has while occurred trying to load the projects.';
    this.loading = false;

    return throwError(error.message);
  }
}
