const { spawn } = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

// type into stdin and when done use Ctrl + D to signal end event