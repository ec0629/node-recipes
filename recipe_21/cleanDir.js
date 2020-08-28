const fs = require('fs');
const path = require('path');

const ms1week = 7 * 24 * 60 * 60 * 1000;

function cleanDirectory(pathname) {
  const files = fs.readdirSync(pathname);
  files.forEach((filename) => {
    const fullPath = path.join(pathname, filename);
    fs.stat(fullPath, (err, stats) => {
      if (err) throw err;
      const isOlderThanOneWeek = Date.now() - stats.mtime.getTime() > ms1week;
      if (isOlderThanOneWeek) {
        fs.unlink(fullPath, (err) => {
          if (err) throw err;
        });
      }
    });
  });
}

if (require.main === module) {
  cleanDirectory(process.argv[2]);
} else {
  module.exports = cleanDirectory;
}
