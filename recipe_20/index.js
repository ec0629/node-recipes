const fs = require('fs');
const path = require('path');

const corruptDir = path.join(__dirname, 'corrupted');
const files = fs.readdirSync(corruptDir);
const fixedDir = path.join(__dirname, 'fixed');

try {
  fs.readdirSync(fixedDir);
} catch (err) {
  if (err.code === 'ENOENT') {
    fs.mkdirSync(fixedDir);
  }
}

files.forEach((filename) => {
  const corruptFilePath = `${corruptDir}/${filename}`;
  const fixedFilePath = `${fixedDir}/${filename}`;
  fs.copyFile(corruptFilePath, fixedFilePath, (err) => {
    if (err) throw err;
    fs.stat(fixedFilePath, (err, stats) => {
      if (err) throw err;
      const size = Math.ceil(stats.size / 2);
      fs.truncate(fixedFilePath, size, (err) => {
        if (err) throw err;
      });
    });
  });
});
