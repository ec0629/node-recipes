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

withTime.on('data', (data) => console.log(`length: ${data.length}`));

// we are not listening for the error event
// withTime.on('error', console.error);
// therefore if an error is emitted without a listener
// the process will exit, and the 'end' event will not fire
withTime.execute(fs.readFile, '');