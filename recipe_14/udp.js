const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

const PORT = 3333;
const HOST = '127.0.0.1';

server.bind(PORT, HOST);

// Client sending strings
// setInterval(() => {
//   const client = dgram.createSocket('udp4');
//   client.send('This example rocks', PORT, HOST, (err) => {
//     if (err) throw err;

//     console.log('UDP message sent');
//     client.close();
//   });
// }, 1000);

// Client sending buffer in pieces
const client = dgram.createSocket('udp4');
const msg = Buffer.from('This example rocks');
// 0 is the offset and the 12 is how many bytes to send
// which is only required if a buffer is sent
client.send(msg, 0, 12, PORT, HOST, (err) => {
  if (err) throw err;

  client.send(msg, 12, 6, PORT, HOST, (err) => {
    if (err) throw err;

    console.log('UDP message sent');
    client.close();
  });
  console.log('UDP message sent');
});
