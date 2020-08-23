const fs = require('fs');
const path = require('path');

// Provide a defualt callback function for when Promise API
// is being used
function readFileAsArray(file, cb = () => { }) {
    return new Promise((resolve, reject) => {
        const absPath = path.join(__dirname, file);
        fs.readFile(absPath, (err, data) => {
            if (err) {
                reject(err);
                return cb(err);
            }

            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        });
    });
}

// Callback style
readFileAsArray('./numbers.txt', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count:', oddNumbers.length);
});

// Promise API
readFileAsArray('./numbers.txt')
    .then((lines) => {
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('odd numbers count:', oddNumbers.length);
    })
    .catch(console.error);