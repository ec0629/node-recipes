const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus();
  cpus.forEach(() => {
    cluster.fork();
  });

  console.log(`Master PID: ${process.pid}`);

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed.\nStarting a new worker...`);
      cluster.fork();
    }
  });

  // when node process receives the SIGUSR2 signal
  // it will begin disconnecting and restarting
  // process one at a time
  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);

    const restartWorker = (workerIndex) => {
      const worker = workers[workerIndex];
      // condition to end recursive restart call
      if (!worker) return;

      // handle restart and recursive call on disconnect
      worker.on('exit', () => {
        // want to make sure we are handling workers that have
        // been disconnected and not for other reasons
        if (!worker.exitedAfterDisconnect) return;
        console.log(`Exited process ${worker.process.pid}`);
        cluster.fork().on('listening', () => {
          // recursive call only after disconnected starts up again
          restartWorker(workerIndex + 1);
        });
      });
      // disconnect worker
      worker.disconnect();
    };

    restartWorker(0)
  });
} else {
  require('./server');
}