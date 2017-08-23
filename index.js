const http = require('http');

const helloWorld = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  response.write('Hello World!');

  response.end();
};

const routes = {
  '/': helloWorld,
};

const app = (request, response) => {

  if (request.url in routes) {
    return routes[request.url](request, response);
  }

  response.writeHead(404);
  response.end(http.STATUS_CODES[404]);
};

http.createServer(app).listen(80);
