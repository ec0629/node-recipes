const fs = require('fs');
const path = require('path');

function readFileAsArray(file, cb) {
    const absPath = path.join(__dirname, file);
    fs.readFile(absPath, (err, data) => {
        if (err) {
            return cb(err);
        }

        const lines = data.toString().trim().split('\n');
        cb(null, lines);
    });
}

readFileAsArray('./numbers.txt', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
});