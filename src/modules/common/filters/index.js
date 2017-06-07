'use strict';

module.exports =
    angular.module('app.common.filters', [])
        .filter('exampleFilter', require('./example.filter'));
