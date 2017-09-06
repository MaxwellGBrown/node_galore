const fs = require('fs');
const path = require('path');

const getCreateUser = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html' 
  });

  const filepath = path.join(__dirname, 'create_user.html');
  const html = fs.readFileSync(filepath);
  response.write(html.toString());

  response.end();
};

const postCreateUser = (request, response) => {
  console.log('request: ', request);
  // TODO
  response.end();
};

module.exports = {
  getCreateUser: getCreateUser,
  postCreateUser: postCreateUser,
};
