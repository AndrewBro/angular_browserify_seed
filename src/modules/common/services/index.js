'use strict';

module.exports =
    angular.module('app.common.services', [])
        .service('imagesService', require('./images.service'));
