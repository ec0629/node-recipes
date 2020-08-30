const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  // exact behaviour depends on os
  detached: true,
  // stdio must also be independent of parent to allow for continued
  // independent running
  stdio: 'ignore',
});

// allows parent process to exit independent of child process
child.unref();

// $ ps -ef | grep timer