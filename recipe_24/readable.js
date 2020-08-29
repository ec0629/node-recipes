const { Readable } = require('stream');

// const inStream = new Readable();

// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// // signal that stream has no more data
// inStream.push(null);

// the above was not very efficient because it pushed data to the
// stream without knowing if anything was listening for it.

const inStream = new Readable({
  read(size) {
    // using setTimeout is only for visual effect
    setTimeout(() => {
      // continue pushing characters one at a time until Z
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode));
      this.currentCharCode += 1;
    }, 100);
  }
});

// set the starting character at A
inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit', () => {
  console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});

process.stdout.on('error', process.exit);