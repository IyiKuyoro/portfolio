import { AuthorsPipe } from './authors.pipe';

describe('AuthorsPipe', () => {
  it('should create pipe', () => {
    const pipe = new AuthorsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert an array to a string', () => {
    const pipe = new AuthorsPipe();
    const textString = pipe.transform(['author1', 'author2', 'author3']);

    expect(textString).toBeTruthy('author1, author2 and author3');
  });
});
