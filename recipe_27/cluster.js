const cluster = require('cluster');
const os = require('os');

// **** Mock DB Call
const numberOfUsersInDb = function () {
  this.count = this.count || 5;
  this.count = this.count * 2;
  return this.count;
}
// ****

if (cluster.isMaster) {
  const cpus = os.cpus();
  console.log(`Forking for ${cpus.length} CPUs`);
  cpus.forEach(() => {
    cluster.fork();
  });

  // broadcast message to all workers
  // caching data across all workers
  function updateWorkers() {
    const usersCount = numberOfUsersInDb();
    Object.values(cluster.workers).forEach((worker) => {
      worker.send({ usersCount });
    });
  }

  updateWorkers();
  setInterval(updateWorkers, 10000);
} else {
  require('./server');
}