const http = require('http');

const { app } = require('./app');


const server = http.createServer().listen(80);

server.on('request', app);
