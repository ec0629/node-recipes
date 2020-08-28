const fs = require('fs');
const server = require('http').createServer();

const filePath = './big.file';

server.on('request', (req, res) => {
  switch (req.url) {
    case '/bulk':
      fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.end(data);
      });
      break;
    case '/stream':
      const src = fs.createReadStream(filePath);
      src.pipe(res);
      break;
    default:
      res.writeHead(404);
      res.end();
      break;
  }
});

server.listen(8000);