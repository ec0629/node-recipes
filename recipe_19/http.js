// server: http.Server
const server = require('http').createServer();

server.on('request', (req, res) => {
  // req: http.IncomingMessage
  // res: http.ServerResponse

  // response object is a writable stream
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n');
  // the end method terminate the HTTP response
  res.end();
});

server.listen(8000);

// curl -i localhost:8000