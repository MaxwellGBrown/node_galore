const http = require('http');
const path = require('path');
const url = require('url');

const httpMocks = require('node-mocks-http');
const test = require('ava');

const views = require('../app/views');


test('hello world', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.helloWorld(request, response);
  t.pass();
});
