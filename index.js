const express = require('express');

const app = express();

const port = 80;

const helloWorld = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });
  response.write('Hello World\n');
  response.end();
}

app.get('/', helloWorld);

app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port);
});
