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

// we are using the once method to avoid the function being
// called multiple times before exiting assuming that
// running the cleanup code multiple times may be undesired
process.once('uncaughtException', (err) => {
    console.log(err);
    console.log('Performing cleanup functions...');
    process.exit(1);
});

withTime.execute(fs.readFile, '');