import { IArticle } from './Article.model';

export interface IApiArticleResponse {
  success: boolean;
  message: string;
  data?: IArticle;
  possibleCauses?: string[];
}
