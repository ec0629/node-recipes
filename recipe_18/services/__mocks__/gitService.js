const gitService = jest.requireActual('../gitService')();

const getUser = jest.fn((userId) => gitService.getUser(userId));

module.exports = () => ({ getUser });