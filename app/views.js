const fs = require('fs');
const path = require('path');

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
  const filepath = path.join(__dirname, 'static', 'lorem.txt')
  const data = fs.readFileSync(filepath);
  response.write(data.toString());

  response.end();
};

const arabesque = (request, response) => {
  const filepath = path.join(__dirname, 'static', 'arabesque_1.mp3');
  const stat = fs.statSync(filepath)

  response.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size
  });

  const readstream = fs.createReadStream(filepath);
  readstream.pipe(response);
};

module.exports = {
  arabesque: arabesque,
  helloWorld: helloWorld,
  loremIpsum: loremIpsum
};
