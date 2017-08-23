const events = require('events');
const fs = require('fs');
const http = require('http');
const path = require('path');

const routes = require('./app/routes');


// Events
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


// Server & App
const app = (request, response) => {
  eventEmitter.emit('connection', request, response);
};

http.createServer(app).listen(80);
