import { IArticle } from './Article.model';

export interface IGetArticleResponse {
  success: boolean;
  message: string;
  data?: {
    pageMeta: object,
    articles: IArticle[],
  };
  possibleCauses?: string[];
}
