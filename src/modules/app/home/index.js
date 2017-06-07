'use strict';

require('ng-infinite-scroll');

module.exports =
  angular.module('app.home', ['infinite-scroll'])
    .config(require('./routes.js'));
