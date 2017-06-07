'use strict';
require('../common');
require('./home');
require('./album');
require('./image');


module.exports =
  angular.module('app', [
    'ui.router',
    'app.common',
    'app.home',
    'app.album',
    'app.image',
    require('../../../tmp/templates').name,
  ])
    .config(/*@ngInject*/config);


function config(/*$stateProvider*/) {
}
