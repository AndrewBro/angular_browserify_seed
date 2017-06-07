'use strict';

module.exports =
    angular.module('app.common.directives', [])
        .directive('exampleDirective', require('./example.directive'));
