export interface IProject {
  id: number;
  title: string;
  language: string;
  description: string;
  link: string;
  host: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IProjectApiResponse {
  success: true;
  message: string;
  data: IProject[];
}
