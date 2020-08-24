const path = require('path');
const fs = require('fs');

const files = ['lorem1.txt'];

files.forEach((file) => {
  try {
    const filePath = path.resolve(__dirname, file);
    const data = fs.readFileSync(filePath, 'utf999');
    console.log('File contents:', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
})