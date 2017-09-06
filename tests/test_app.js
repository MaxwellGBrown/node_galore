const test = require('ava');

const httpMocks = require('node-mocks-http');
const common = require('./common_tests');

const app = require('../app/app');
const { notFound, connection } = require('../app/app')
const routes = require('../app/routes');


test(common.responseCode, notFound, 404);
test(common.responseMessage, notFound, 'Not Found');


test('connection does 404 if route is unrecognized', t => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();
  request.url = 'this will never exist or be found';

  connection(request, response);
  t.is(response.statusCode, 404);
});


test('connection does 404 if method for route can\'t be matched', t => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();
  request.url = '/';
  request.method = 'NOT AN HTTP REQUEST METHOD';

  connection(request, response);
  t.is(response.statusCode, 404);
});
