const path = require('path');
const fs = require('fs');

const files = ['lorem1.txt'];

files.forEach((file) => {
  try {
    const filePath = path.resolve(__dirname, file);
    const data = fs.readFileSync(filePath, 'utf999');
    console.log('File contents:', data);
  } catch (err) {
    // we can gracefully recover when a file is not found
    // however the issue now exists where we are swallowing
    // every error. Which may mask other issues.
    console.log('File not found');
  }
})