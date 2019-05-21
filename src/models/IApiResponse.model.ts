import { IArticle } from './IArticle.model';

export interface IApiResponse {
  success: boolean;
  message: string;
  data?: Object;
  possibleCauses?: string[];
}

export interface IAuthApiResponse {
  success: boolean;
  message: string;
  data?: {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    token: string;
  };
  possibleCauses?: string[];
}

export interface INewArticleApiResponse {
  success: boolean;
  message: string;
  data?: IArticle;
  possibleCauses?: string[];
}
