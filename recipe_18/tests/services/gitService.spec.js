const gitService = require('../../services/gitService')();

jest.mock('https');
const https = require('https');

const username = 'jonathanfmills';

describe('GitService', () => {
  describe('GetUser', () => {

    test('should return user and repos', () => {
      return gitService.getUser('jonathanfmills')
        .then((user) => {
          expect(user.login).toBe(username);
          expect(user).toHaveProperty('repos');
          expect(Array.isArray(user.repos)).toBe(true);
          expect(https.request.mock.calls[0][0]['headers']['User-Agent']).toBe('gitExample');
          expect(https.request.mock.calls[1][0]['path']).toBe(`/users/${username}/repos`);
        });
    });

  });

});
