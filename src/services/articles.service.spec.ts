import { ArticlesService } from './articles.service';

describe('ArticlesService', () => {
  let service;

  beforeEach(() => {
    service = new ArticlesService();
  });

  it('should contain 8 articles', () => {
    expect(service.articles.length).toBe(8);
  });
});
