const httpMocks = require('node-mocks-http');

const responseCode = (t, view, code) => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();

  view(request, response);
  t.is(response.statusCode, code);
};
responseCode.title = (providedTitle, view, code) => (
  `${view.name} sets response.statusCode = ${code}`
);


const responseMessage = (t, view, message) => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();

  view(request, response);
  t.is(response.statusMessage, message);
};
responseMessage.title = (providedTitle, view, message) => (
  `${view.name} sets response.statusMessage = ${message}`
);


const responseEnd = (t, view) => {
  const request = httpMocks.createRequest();
  const response = httpMocks.createResponse();

  view(request, response);
  t.is(response._isEndCalled(), true);
};
responseEnd.title = (providedTitle, view) => `${view.name} calls response.end()`;


module.exports = {
  responseCode: responseCode,
  responseMessage: responseMessage,
  responseEnd: responseEnd
};
