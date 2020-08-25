const authController = require('../../controllers/auth.controller');

describe('AuthController', () => {

  // #1
  // before/after each/all functions are scoped to describe blocks
  beforeEach(() => {
    authController.setRoles(['user']);
  });

  describe('isAuthorized', () => {
    test('should return false if not authorized', () => {
      const isAuth = authController.isAuthorized('admin');
      expect(isAuth).toBe(false);
    });

    // #2
    // this is the only test that will be run in this block
    test.only('should return true if authorized', () => {
      authController.setRoles(['user', 'admin']);
      const isAuth = authController.isAuthorized('admin');
      expect(isAuth).toBe(true);
    });

    // #4
    // test to be implemented later
    test.todo('should not allow a get if not authorized');
    test.todo('should allow get if authorized');

  });

  // #2
  // this describe block will still run, even though a test
  // in the above block has the only method, because this block
  // also invokes the only method
  describe.only('isAuthorizedAsync', () => {
    // #5
    test('should return false if not authorized', (done) => {
      authController.isAuthorizedAsync('admin', (isAuth) => {
        expect(isAuth).toBe(false);
        done();
      });
    });

    // #3
    // we can also skip test instead of commenting them out
    // which is always a safer option
    test.skip('should return true if authorized', (done) => {
      authController.setRoles(['user', 'admin']);
      authController.isAuthorizedAsync('admin', (isAuth) => {
        expect(isAuth).toBe(true);
        done();
      });
    });

    // special expect syntax for handling promises
    test('should return true if authorized (Promise)', () => {
      authController.setRoles(['user', 'admin']);
      // #6
      return expect(authController.isAuthorizedPromise('admin'))
        .resolves.toBe(true);
    });

  });

});