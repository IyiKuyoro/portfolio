import { IArticle } from './IArticle.model';

export interface IGetArticleResponse {
  success: boolean;
  message: string;
  data?: {
    pageMeta: object,
    articles: IArticle[],
  };
  possibleCauses?: string[];
}
