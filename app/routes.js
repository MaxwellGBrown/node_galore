const arabesque = require('./arabesque');
const hello = require('./hello');
const lorem = require('./lorem');

module.exports = {
  '/': {
    'GET': hello
  },

  '/lorem': {
    'GET': lorem
  },

  '/arabesque': {
    'GET': arabesque
  }
};
