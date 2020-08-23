const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        // asynchronous validation, better design
        return process.nextTick(
            cb,
            new TypeError('argument should be a string'),
        );
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

// This console log will now run even as expected despite the validation
// error because fileSize is now a pure async function.
console.log('Hello!');