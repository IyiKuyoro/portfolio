import { IArticle } from './IArticle.model';

export interface IApiArticleResponse {
  success: boolean;
  message: string;
  data?: IArticle;
  possibleCauses?: string[];
}
