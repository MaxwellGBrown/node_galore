const test = require('ava');

const fs = require('fs');
const path = require('path');
const url = require('url');

const httpMocks = require('node-mocks-http');
const common = require('./common_tests');

const loremIpsum = require('../app/lorem');


test([common.okResponse, common.responseEnd], loremIpsum);


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
