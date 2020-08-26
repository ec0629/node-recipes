const { PassThrough } = require('stream');
const userJson = require('../mockGitHubUserData.json');
const repoJson = require('../mockGitHubRepoData.json');

const https = jest.createMockFromModule('https');

const jsonResponses = [userJson, repoJson];
let idx = 0;

function getJson() {
  let resp = jsonResponses[idx];
  if (idx !== jsonResponses.length - 1) {
    idx += 1;
  }
  return resp;
}

function request(options, callback) {
  const responseStream = new PassThrough();
  responseStream.write(JSON.stringify(getJson()));
  callback(responseStream);
  return responseStream;
}

https.request = request;

module.exports = https;