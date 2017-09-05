const fs = require('fs');
const path = require('path');

const arabesque = (request, response) => {
  const filepath = path.join(__dirname, 'arabesque_1.mp3');
  const stat = fs.statSync(filepath)

  response.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Length': stat.size
  });

  const readstream = fs.createReadStream(filepath);
  readstream.pipe(response);
};

module.exports = arabesque;
