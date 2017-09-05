const arabesque = require('./arabesque');
const hello = require('./hello');
const lorem = require('./lorem');

module.exports = {
  '/': hello,
  '/lorem': lorem,
  '/arabesque': arabesque
};
