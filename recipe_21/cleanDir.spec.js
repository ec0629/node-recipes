const fs = require('fs');
const path = require('path');
const cleanDir = require('./cleanDir');

jest.mock('fs');

const pathname = './dupl';

describe('cleanDir', () => {
  beforeEach(() => {
    fs.readdirSync.mockClear();
    fs.statSync.mockClear();
    fs.unlinkSync.mockClear();
  });

  test('should call readdirSync once with pathname', () => {
    cleanDir(pathname);
    expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    expect(fs.readdirSync).toHaveBeenLastCalledWith(pathname);
  });

  test('should call statSync three times with pathname and filename', () => {
    cleanDir(pathname);
    expect(fs.statSync).toHaveReturnedTimes(10);
    expect(fs.statSync).toHaveBeenNthCalledWith(1, path.join(pathname, 'file0'));
  });

  test('should call unlink twice with pathname and filename', () => {
    cleanDir(pathname);
    expect(fs.unlinkSync).toBeCalledTimes(3);
    expect(fs.unlinkSync).toHaveBeenNthCalledWith(1, path.join(pathname, 'file7'));
  });
});
