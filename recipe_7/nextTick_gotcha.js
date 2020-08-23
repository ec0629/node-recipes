const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        // synchronous validation, poor design
        return cb(new TypeError('argument should be a string'));
    }

    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        }

        cb(null, stats.size);
    });
}

fileSize(1, (err, size) => {
    if (err) throw err;
    console.log(`Size in KB: ${size / 1024}`);
});

// This console log will not run even though the above call to fileSize is
// async. This is because we have handled validation in the function synchronously.
// This is poor design because we should keep async functions async and
// sychronous functions synchronous.
console.log('Hello!');