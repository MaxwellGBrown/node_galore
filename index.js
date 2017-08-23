const events = require('events');
const fs = require('fs');
const http = require('http');


const eventEmitter = new events.EventEmitter();

eventEmitter.on('request', (request) => {
  console.log(request.url);
});

const helloWorld = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  response.write('Hello World!');

  response.end();
};

const loremIpsum = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  // Note that we use the 'blocking' file read so we don't return a response
  // before file read is over.
  const data = fs.readFileSync('lorem.txt');
  response.write(data.toString());

  response.end();
};

const routes = {
  '/': helloWorld,
  '/lorem': loremIpsum
};


const app = (request, response) => {
  eventEmitter.emit('request', request);

  if (request.url in routes) {
    return routes[request.url](request, response);
  }

  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
};

http.createServer(app).listen(80);
