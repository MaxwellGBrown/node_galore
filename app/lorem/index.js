const fs = require('fs');
const path = require('path');

const loremIpsum = (request, response) => {
  response.writeHead(200, {
      'Content-Type': 'text/plain'
  });

  // Note that we use the 'blocking' file read so we don't return a response
  // before file read is over.
  const filepath = path.join(__dirname, 'lorem.txt')
  const data = fs.readFileSync(filepath);
  response.write(data.toString());

  response.end();
};

module.exports = loremIpsum;
