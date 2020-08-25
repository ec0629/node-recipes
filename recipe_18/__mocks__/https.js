const { PassThrough } = require('stream');
const gitJson = require('../mockGitHubUserData.json');

const https = jest.createMockFromModule('https');

function request(options, callback) {
  // const gitJson = { login: 'jonathanfmills' };
  const gitResponse = new PassThrough();
  gitResponse.write(JSON.stringify(gitJson));
  callback(gitResponse);
  return gitResponse;
}

https.request = request;

module.exports = https;