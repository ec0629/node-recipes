const { PassThrough } = require('stream');
const userJson = require('../mockGitHubUserData.json');
const repoJson = require('../mockGitHubRepoData.json');

const https = jest.createMockFromModule('https');

function request(data) {
  return (options, cb) => {
    const responseStream = new PassThrough();
    responseStream.write(JSON.stringify(data));
    responseStream.end();
    cb(responseStream);
    const requestStream = new PassThrough();
    return requestStream;
  };
}

https.request = jest.fn()
  .mockImplementationOnce(request(userJson))
  .mockImplementation(request(repoJson));

module.exports = https;