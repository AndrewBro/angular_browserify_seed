'use strict';
require('./services');

module.exports =
  angular.module('app.common', [
    // require('./directives').name,
    // require('./filters').name,
    'app.common.services'
  ]);
