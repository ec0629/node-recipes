const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e7; i += 1) {
  file.write('Excepteur eiusmod anim pariatur nulla dolore voluptate sint dolor exercitation laboris pariatur aliquip amet.\n');
}

file.end();