const ms1Day = 24 * 60 * 60 * 1000;
const files = [];

for (let i = 0; i < 10; i += 1) {
  files.push({ filename: `file${i}`, stats: { mtime: new Date(Date.now() - i * ms1Day) } });
}

module.exports = files;