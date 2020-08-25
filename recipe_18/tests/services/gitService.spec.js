const gitService = require('../../services/gitService')();

jest.mock('https');

describe('GitService', () => {
  describe('GetUser', () => {

    test('should return user and repos', () => {

      return gitService.getUser('jonathanfmills')
        .then((user) => {
          console.log(user);
          expect(user.login).toBe('jonathanfmills');
          expect(user).toHaveProperty('repos');
          expect(Array.isArray(user.repos)).toBe(true);
        });
    });

  });

});
