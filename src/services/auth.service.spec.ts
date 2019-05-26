import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service;
  class MockHttpClient {
    post() {}
  }
  let mockHttpClient;

  beforeEach(() => {
    mockHttpClient = new MockHttpClient();
    service = new AuthService(mockHttpClient);
  });

  it('should call the backend api', () => {
    spyOn(mockHttpClient, 'post');
    service.login('username', 'password');

    expect(mockHttpClient.post).toHaveBeenCalled();
  });
});
