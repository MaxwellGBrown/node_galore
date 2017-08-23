const http = require('http');

const helloWorld = (request, response) => {
  
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  response.write('Hello World\n');

  response.end();  // Tells server we're done writing the response
}

http.createServer(helloWorld).listen(80);
