export interface IArticle {
  id: string | number;
  uuid: string;
  title: string;
  slug: string;
  authors: string[];
  category: string;
  imageUrl?: string;
  link?: string;
  body?: string;
  external: boolean;
}
