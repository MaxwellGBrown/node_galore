const test = require('ava');

const httpMocks = require('node-mocks-http');
const common = require('./common_tests');

const helloWorld = require('../app/hello');


test([common.okResponse, common.responseEnd], helloWorld);


test('helloWorld "Hello World!" as body', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  const data = response._getData();
  t.is(data, "Hello World!");
});


test('helloWorld Content-Type is text/plain', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  t.is(response._headers['Content-Type'], 'text/plain');
});
