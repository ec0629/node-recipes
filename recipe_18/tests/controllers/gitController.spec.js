const gitController = require('../../controllers/gitController')();
const gitService = require('../../services/gitService')();

jest.mock('../../services/gitService');

const userId = 'jonathanfmills';

describe.only('gitController', () => {

  test('should get user and repos from git service', (done) => {
    const req = { params: { userId } };
    const res = {
      json: jest.fn((user) => {
        expect(user.login).toBe(userId);
        done();
      })
    };

    gitController.userGet(req, res);
    expect(gitService.getUser).toBeCalledTimes(1);
    expect(gitService.getUser).toHaveBeenCalledWith(userId);
  });

});
