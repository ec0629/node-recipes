const { spawn } = require('child_process');

// Example #1 basic command
// const child = spawn('pwd');

// Example #2: passing command arguments to child process
// arguments for a command can be included as an array
// as the second arguments
// const child = spawn('find', ['.', '-type', 'f']);

// Example #3: child process errors
// passing an invalid param will cause the child process
// to write the error to stderr and then exit with error
// code 1
const child = spawn('find', ['sdafjdsafiojsdiofj', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', function (code, signal) {
  console.log(`child process exited with code ${code}, signal ${signal}`)
});