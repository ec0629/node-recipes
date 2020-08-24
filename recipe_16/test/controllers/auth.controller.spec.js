const assert = require('assert');
const authController = require('../../controllers/auth.controller');

describe('AuthController', () => {
  // before/after each/all functions are scoped to describe blocks
  beforeEach(() => {
    authController.setRoles(['user']);
  });

  describe.only('isAuthorized', () => {
    test('should return false if not authorized', () => {
      assert.equal(false, authController.isAuthorized('admin'));
    });

    // this is the only test that will be run in this block
    test.only('should return true if authorized', () => {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });

    // test to be implemented later
    test.todo('should not allow a get if not authorized');
    test.todo('should allow get if authorized');

  });

  // this describe block will still run, even though a test
  // in the above block has the only method, because this block
  // also invokes the only method
  describe.only('isAuthorizedAsync', () => {
    test('should return false if not authorized', (done) => {
      authController.isAuthorizedAsync('admin', (isAuth) => {
        assert.equal(false, isAuth);
        done();
      });
    });

    // we can also skip test instead of commenting them out
    // which is always a safer option
    test.skip('should return true if authorized', (done) => {
      authController.setRoles(['user', 'admin']);
      authController.isAuthorizedAsync('admin', (isAuth) => {
        assert.equal(true, isAuth);
        done();
      });
    });

  });

});