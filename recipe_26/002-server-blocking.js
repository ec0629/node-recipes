// Practical use of fork() method
const http = require('http');

function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  }
  return sum;
}

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const sum = longComputation();
    return res.end(`Sum is ${sum}`);
  } else {
    res.end('Ok');
  }
});

server.listen(3000);

// this server cannot handle two requests simultaneously
// curl localhost:3000/compute
// curl localhost:3000