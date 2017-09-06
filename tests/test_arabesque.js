const test = require('ava');

const fs = require('fs');
const path = require('path');
const url = require('url');

const httpMocks = require('node-mocks-http');
const common = require('./common_tests');

const arabesque = require('../app/arabesque');


test([common.okResponse], arabesque);

// TODO https://github.com/howardabrams/node-mocks-http/issues/139
test.failing([common.responseEnd], arabesque);

test('arabesque Content-Type is audio/mpeg', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  arabesque(request, response);
  t.is(response._headers['Content-Type'], 'audio/mpeg');
});


test('arabesque Content-Length is same as file', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  arabesque(request, response);
  t.is(response._headers['Content-Length'], 7761240);
});


// TODO https://github.com/howardabrams/node-mocks-http/issues/139
test.failing('arabesque response body is same as arabesque_1.mp3', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  arabesque(request, response);

  const arabesqueData = fs.createReadStream(
    path.join(__dirname, '..', 'app', 'arabesque', 'arabesque_1.mp3')
  ).toString();  // toString()?
  const data = response._getData();

  t.is(data, arabesqueData);
});
