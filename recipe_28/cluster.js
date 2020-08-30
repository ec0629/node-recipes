const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus();
  cpus.forEach(() => {
    cluster.fork();
  });

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed.\nStarting a new worker...`);
      cluster.fork();
    }
  })
} else {
  require('./server');
}