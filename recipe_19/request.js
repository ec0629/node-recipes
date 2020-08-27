const http = require('http');

// const req = http.request({
//   hostname: 'www.google.com',
// }, (res) => {
//   console.log(res.statusCode);
//   console.log(res.headers);

//   res.on('data', (data) => {
//     console.log(data.toString());
//   });
// });

// req.on('error', (err) => console.log(err));

// req.end();

// Alternatively if we are not writing to the body of the
// request object then we can use the http.get method
// which is preconfigured. We also don't need to call
// req.end() either.

// req: http.ClientRequest
const req = http.get('http://www.google.com', (res) => {
  // res: http.IncomingMessage
  console.log(res.statusCode);
  console.log(res.headers);

  res.on('data', (data) => {
    console.log(data.toString());
  });
})

req.on('error', (err) => console.log(err));

// by default the request method uses the global Agent object
// http.Agent
console.log(req.agent);