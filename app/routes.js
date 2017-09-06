const arabesque = require('./arabesque');
const hello = require('./hello');
const lorem = require('./lorem');
const user = require('./user').views;


module.exports = {
  '/': {
    'GET': hello
  },

  '/lorem': {
    'GET': lorem
  },

  '/arabesque': {
    'GET': arabesque
  },

  '/create_user': {
    'GET': user.getCreateUser,
    'POST': user.postCreateUser
  }
};
