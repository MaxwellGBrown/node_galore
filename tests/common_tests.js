const httpMocks = require('node-mocks-http');

const okResponse = (t, view) => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();

  view(request, response);
  t.is(response.statusCode, 200);
};
okResponse.title = (providedTitle, view) => `${view.name} is 200 OK`;

const responseEnd = (t, view) => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();

  view(request, response);
  t.is(response._isEndCalled(), true);
};
responseEnd.title = (providedTitle, view) => `${view.name} calls response.end()`;

module.exports = {
  okResponse: okResponse,
  responseEnd: responseEnd
};
