const test = require('ava');

const httpMocks = require('node-mocks-http');

const helloWorld = require('../app/hello');


test('helloWorld 200 OK', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  t.is(response.statusCode, 200);
});


test('helloWorld "Hello World!" as body', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  const data = response._getData();
  t.is(data, "Hello World!");
});


test('helloWorld calls .end()', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  t.is(response._isEndCalled(), true);
});


test('helloWorld Content-Type is text/plain', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  helloWorld(request, response);
  t.is(response._headers['Content-Type'], 'text/plain');
});
