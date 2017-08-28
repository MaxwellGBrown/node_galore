const http = require('http');
const path = require('path');
const url = require('url');

const httpMocks = require('node-mocks-http');
const test = require('ava');

const views = require('../app/views');


test('helloWorld 200 OK', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.helloWorld(request, response);
  t.is(response.statusCode, 200);
});


test('helloWorld "Hello World!" as body', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.helloWorld(request, response);
  const data = response._getData();
  t.is(data, "Hello World!");
});


test('helloWorld calls .end()', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.helloWorld(request, response);
  const data = response._getData();
  t.is(response._isEndCalled(), true);
});
