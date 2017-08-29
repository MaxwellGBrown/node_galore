const fs = require('fs');
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
  t.is(response._isEndCalled(), true);
});


test('helloWorld Content-Type is text/plain', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.helloWorld(request, response);
  t.is(response._headers['Content-Type'], 'text/plain');
});


test('loremIpsum 200 OK', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.loremIpsum(request, response);
  t.is(response.statusCode, 200);
});


test('loremIpsum response body matches file', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.loremIpsum(request, response);
  const loremText = fs.readFileSync(
    path.join(__dirname, '..', 'app', 'static', 'lorem.txt')
  ).toString();
  const data = response._getData();
  t.is(data, loremText);
});


test('loremIpsum Content-Type is text/plain', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.loremIpsum(request, response);
  t.is(response._headers['Content-Type'], 'text/plain');
});


test('loremIpsum calls .end()', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.loremIpsum(request, response);
  t.is(response._isEndCalled(), true);
});


test('arabesque 200 OK', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.arabesque(request, response);
  t.is(response.statusCode, 200);
});


test('arabesque Content-Type is audio/mpeg', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.arabesque(request, response);
  t.is(response._headers['Content-Type'], 'audio/mpeg');
});


test('arabesque Content-Length is same as file', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.arabesque(request, response);
  t.is(response._headers['Content-Length'], 7761240);
});


// TODO https://github.com/howardabrams/node-mocks-http/issues/139
test.failing('arabesque response body is same as arabesque_1.mp3', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.arabesque(request, response);

  const arabesqueData = fs.createReadStream(
    path.join(__dirname, '..', 'app', 'static', 'arabesque_1.mp3')
  ).toString();  // toString()?
  const data = response._getData();

  t.is(data, arabesqueData);
});


// TODO https://github.com/howardabrams/node-mocks-http/issues/139
test.failing('arabesque calls .end()', t => {
  let request = httpMocks.createRequest();
  let response = httpMocks.createResponse();

  views.arabesque(request, response);
  t.is(response._isEndCalled(), true);
});
