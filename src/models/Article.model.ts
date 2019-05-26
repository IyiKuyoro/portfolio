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
  createdAt?: Date;
}

export interface INewArticle {
  title: string;
  authors: string;
  category: string;
  body: string;
  imageUrl?: string;
}

export interface IArticleResolved {
  article: IArticle;
  error?: any;
}

export class NewExternalArticle {
  title: string;
  link: string;
  category: string;
  imageUrl?: string;

  constructor(
    title: string, link: string, category: string, imageUrl?: string
  ) {
    this.title = title;
    this.link = link;
    this.category = category;

    if (imageUrl) {
      this.imageUrl = imageUrl;
    }
  }
}
