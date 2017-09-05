const test = require('ava');

const fs = require('fs');
const path = require('path');
const url = require('url');

const httpMocks = require('node-mocks-http');

const loremIpsum = require('../app/lorem');


test('loremIpsum 200 OK', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  loremIpsum(request, response);
  t.is(response.statusCode, 200);
});


test('loremIpsum response body matches file', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  loremIpsum(request, response);
  const loremText = fs.readFileSync(
    path.join(__dirname, '..', 'app', 'lorem', 'lorem.txt')
  ).toString();
  const data = response._getData();
  t.is(data, loremText);
});


test('loremIpsum Content-Type is text/plain', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  loremIpsum(request, response);
  t.is(response._headers['Content-Type'], 'text/plain');
});


test('loremIpsum calls .end()', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  loremIpsum(request, response);
  t.is(response._isEndCalled(), true);
});



