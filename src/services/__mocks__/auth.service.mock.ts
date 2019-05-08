import { of } from 'rxjs';

class MockAuthService {
  login() {
    return of();
  }

  authorize() {}

  deAuthorize() {}

  checkAuthorization() {}
}

export default new MockAuthService();
