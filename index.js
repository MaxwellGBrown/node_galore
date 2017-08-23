const express = require('express');

const app = express();

const port = 80;

const helloWorld = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  const name = request.params.name || 'World';
  response.write('Hello ' + name + '\n');

  response.end();
}

app.get('/', helloWorld);
app.get('/hello/:name', helloWorld);


app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port);
});
