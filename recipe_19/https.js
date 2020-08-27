// generate keys using
// $ bash ./createKeys.sh

const https = require('https');
const fs = require('fs');

const server = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
});

server.on('request', (req, res) => {
  res.writeHead('200', { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(443);