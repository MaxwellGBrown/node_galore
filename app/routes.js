const views = require('./views');

module.exports = {
  '/': views.helloWorld,
  '/lorem': views.loremIpsum,
  '/arabesque': views.arabesque
};
