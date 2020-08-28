const files = require('../mockData');

const fs = jest.createMockFromModule('fs');

fs.readdirSync = jest.fn(() => files.map((f) => f.filename));
fs.statSync = jest.fn((path) => {
  const filename = path.split('/').slice(-1)[0];
  const file = files.find((f) => f.filename === filename);
  return file.stats;
});
fs.unlinkSync = jest.fn(() => { });

module.exports = fs;