const events = require('events');
const http = require('http');

const routes = require('./routes');


// A simple demonstration on EventEmitter basics!
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

module.exports = (request, response) => {
  eventEmitter.emit('connection', request, response);
};
