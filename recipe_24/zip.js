const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const { Transform } = require('stream');
const file = process.argv[2];

const progress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('...');
    callback(null, chunk);
  }
});

const iv = 'a'.repeat(16);
const key = 'a'.repeat(24);

fs.createReadStream(file)
  .pipe(zlib.createGzip())

  .pipe(crypto.createCipheriv('aes192', key, iv))
  // the pipe method returns the destination stream
  // so we can add event lsiteners to these streams in 
  // a method chaining fashion to listen to read data event
  // .on('data', () => process.stdout.write('.'))
  .pipe(progress)
  .pipe(fs.createWriteStream(file + '.zz'))
  // same here
  .on('finish', () => console.log('Done'));
