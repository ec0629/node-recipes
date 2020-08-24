process.stdout.write('\u001B[2J\u001B[0;0f');
let counter = 0;
const sockets = {};

const server = require('net').createServer();

server.on('connection', (socket) => {
  socket.id = counter += 1;
  sockets[socket.id] = socket;

  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', (data) => {
    Object.entries(sockets).forEach(([key, cs]) => {
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));