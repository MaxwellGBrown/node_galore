const events = require('events');
const http = require('http');

const routes = require('./routes');


const app = (request, response) => {
  eventEmitter.emit('connection', request, response);
};

const connection = (request, response) => {
  const route = routes[request.url];

  if (!route) {
    return eventEmitter.emit('not_found', request, response);
  }

  const view = route[request.method];

  if (!view) {
    return eventEmitter.emit('not_found', request, response);
  }

  view(request, response);
}


const notFound = (request, response) => {
  console.log('404 -', request.url);
  response.writeHead(404, 'Not Found');
  response.end(http.STATUS_CODES[404]);
};


const eventEmitter = new events.EventEmitter();
eventEmitter.on('connection', connection);
eventEmitter.on('not_found', notFound);


module.exports.default = app;
module.exports = {
  connection: connection,
  notFound: notFound,
  app: app
}
