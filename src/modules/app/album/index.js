'use strict';
module.exports =
  angular.module('app.album', [])
    .config(require('./routes.js'))
    .controller('albumController', require('./controllers/album.controller'));

