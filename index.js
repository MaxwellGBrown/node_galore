const events = require('events');
const fs = require('fs');
const http = require('http');


const eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', (request, response) => {
  if (request.url in routes) {
    console.log('200 -', request.url);
    return routes[request.url](request, response);
  }

  eventEmitter.emit('not_found', request, response);
});

eventEmitter.on('not_found', (request, response) => {
  console.log('404 -', request.url);
  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
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
  eventEmitter.emit('connection', request, response);
};

http.createServer(app).listen(80);
