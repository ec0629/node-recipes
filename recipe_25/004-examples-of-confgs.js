const { spawn } = require('child_process');

// creating a shell instance and inheriting parent stdio
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });

// can also change the working directory
const child = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: `${process.env.HOME}/Downloads`,
});

// can also override child process environment variables
// by default they inherit from process.env
// const child = spawn('echo $HOME', {
//   stdio: 'inherit',
//   shell: true,
//   env: {},
// });