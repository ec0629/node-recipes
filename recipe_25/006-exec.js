const { exec } = require('child_process');

// since exec starts a new shell instance we can use shell syntax to
// pipe data from one command to another
exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});