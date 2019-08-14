import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../../services/projects.service';
import { IProject, IProjectApiResponse } from '../../../models/IProject.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe((res: IProjectApiResponse) => {
      this.projects = res.data;
    });
  }
}
