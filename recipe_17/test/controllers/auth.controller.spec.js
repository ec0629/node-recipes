const authController = require('../../controllers/auth.controller');

describe('AuthController', () => {

  /* Here we can create a basic Jest mock function that has no definition
   * since the function we are testing only invokes the function but does
   * not use the return value, or rely on any side effects caused by the
   * method of that function we don't need to worry about the mock 
   * function handling any logic.
   * 
   * The mock allows us to test how many times the method was invoked, and
   * with what arguments.
   * 
   * Usage equivalent to a Sinon spy.
   */
  describe('getIndex', () => {
    test('should render index', () => {
      const req = {};
      const res = {
        render: jest.fn(),
      };
      authController.getIndex(req, res);
      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('index');
    });
  });

  // Testing a function that has dependencies and relies on their side effects
  describe('isAuthorized', () => {
    let user;
    let spy;

    beforeEach(() => {
      // we are creating a user object to simplify code
      user = {
        roles: ['user'],
        isAuthorized: function (requiredRole) {
          return this.roles.indexOf(requiredRole) >= 0;
        }
      }
      /**
       * Here we need a mock to wrap existing functionality because
       * the method we are testing does rely on side effects of the
       * method therefore we must maintain it's behaviour.
       * 
       * However, we are now testing both the User model and the 
       * authController which diverges from the principles of unit
       * testing.
       */
      spy = jest.spyOn(authController, 'setUser');
      authController.setUser(user);
    });

    test('should return false if not authorized', () => {
      const isAuth = authController.isAuthorized('admin');
      expect(isAuth).toBe(false);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });


  // Testing a function that has dependencies and relies on their side effects
  // but more in line with unit testing isolation principles.
  describe('getIndexWithDependencies', () => {
    let user;

    beforeEach(() => {
      // we are creating a user object to simplify code
      user = {
        roles: ['user'],
        isAuthorized: function (requiredRole) {
          return this.roles.indexOf(requiredRole) >= 0;
        }
      }
    });

    test('should render index if authorized', () => {
      // here we have "stubbed" out the function user.isAuthorized()
      // so that it will always return true and we are therefore 
      // isolating the authController logic only
      const isAuth = jest.fn(() => true);
      user.isAuthorized = isAuth;
      const req = { user };
      const res = {
        render: jest.fn(),
      };
      authController.getIndexWithDependency(req, res);
      expect(isAuth).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('index');
    });

    test('should render error if error is thrown', () => {
      const isAuth = jest.fn(() => {
        throw new Error();
      });
      user.isAuthorized = isAuth;
      const req = { user };
      const res = {
        render: jest.fn(),
      };
      authController.getIndexWithDependency(req, res);
      expect(isAuth).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('error');
    });
  });

});