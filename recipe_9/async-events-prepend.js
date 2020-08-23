const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', console.error);

withTime.on('data', (data) => console.log(`length: ${data.length}`));
// using the prependListener function will result in that handler being executed first
withTime.prependListener('data', (data) => console.log(`characters: ${data.toString().length}`));

withTime.execute(fs.readFile, __filename);