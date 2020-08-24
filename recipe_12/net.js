process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();

server.on('connection', (socket) => {
  // the socket received is a duplex socket meaning we can
  // read and write to the socket
  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', (data) => {
    // data is received as a buffer
    console.log('data is:', data);
    socket.write('data is: ');
    // the write method assumes a utf8 encoding
    // the second parameter can be used to set an explicit one
    socket.write(data);
  });

  socket.on('end', () => {
    // Ctrl + C to disconnect a netcat connection
    console.log('Client disconnected');
  });

  // we can also set a global encoding
  // however we would no longer receive a buffer object on data
  // it would automatically convert it to a string using utf8
  // socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('Server bound'));

// we can connect to the server from the command line using
// nc localhost 8000
// nc is the netcat utility, we could also use telnet