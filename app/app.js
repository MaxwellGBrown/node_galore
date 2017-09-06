const events = require('events');
const http = require('http');

const routes = require('./routes');


// A simple demonstration on EventEmitter basics!
const eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', (request, response) => {
  const route = routes[request.url];

  if (!route) {
    return eventEmitter.emit('not_found', request, response);
  }

  const view = route[request.method];

  if (!view) {
    return eventEmitter.emit('not_found', request, response);
  }

  view(request, response);
});

eventEmitter.on('not_found', (request, response) => {
  console.log('404 -', request.url);
  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
});

module.exports = (request, response) => {
  eventEmitter.emit('connection', request, response);
};
