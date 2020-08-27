const http = require('http');
const fs = require('fs');

const server = http.createServer();

const data = {};

server.on('request', (req, res) => {
  console.log(req.url);

  switch (req.url) {
    case '/api':
      res.writeHead(200, { 'content-type': 'apllication/json' });
      res.end(JSON.stringify(data))
      break;
    case '/home':
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(fs.readFileSync('./home.html'));
      break;
    case '/':
      res.writeHead(301, { 'Location': '/home' });
      res.end();
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }

});

server.listen(8000);