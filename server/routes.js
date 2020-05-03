/**
 * Main application routes
 */

'use strict';

var path = require('path');
 var express =require('express')
module.exports = function(app) {
  app.use(express.static(path.join(__dirname, './static')));

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));
  app.use(express.static('public'));
  function getRoot(request, response) {
    response.sendFile(path.resolve('./static/index.html'));
    response.end();
  }
  
  function getUndefined(request, response) {
    response.sendFile(path.resolve('./static/index.html'));
    response.end();
  }
  
  // Note the dot at the beginning of the path
  app.use(express.static('./static/'));
  
  app.get('/', getRoot);
  app.get('/*', getUndefined);

};
