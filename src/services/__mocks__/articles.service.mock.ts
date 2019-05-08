import { of, Observable } from 'rxjs';

export class MockArticlesService {
  constructor(
  ) {
  }

  getAllArticles(page: number, count: number): Observable<object> {
    return of({
      success: true,
      message: 'Success message',
      data: {
        pageMeta: {},
        articles: [{
          id: 1,
          title: 'title',
          slug: 'title-123',
          category: 'tech',
          authors: [
            'author'
          ],
          imageUrl: 'image',
          link: null,
          external: false,
        }, {
          id: 2,
          title: 'title',
          slug: 'title-1234',
          category: 'inspirational',
          authors: [
            'author'
          ],
          imageUrl: 'image',
          link: null,
          external: false,
        }]
      }
    });
  }

  getArticle(slug: string): Observable<object> {
    return of({
      success: true,
      message: 'Success Message',
      data: {
        title: 'Title',
        authors: [
          'author'
        ],
        category: 'tech',
        body: 'body',
        link: null,
        external: false,
      }
    });
  }
}
