const dns = require('dns');

// lookup method per node.js documentation:
//    uses the same operating system facilities as most other programs.
//    will be asynchronous from JavaScript's perspective, it is implemented as a 
//    synchronous call to getaddrinfo(3) that runs on libuv's threadpool.
dns.lookup('pluralsight.com', (err, address) => {
  console.log(address);
});

// resolve methods per node.js documentation:
//    They do not use getaddrinfo(3) and they always perform a DNS query on the network.
//    This network communication is always done asynchronously, and does not use libuv's
//    threadpool.
dns.resolve4('pluralsight.com', (err, address) => {
  console.log(address);
});

dns.resolve('pluralsight.com', 'A', (err, address) => {
  console.log(address);
});

dns.reverse('52.43.46.114', (err, hostnames) => {
  console.log(hostnames);
});