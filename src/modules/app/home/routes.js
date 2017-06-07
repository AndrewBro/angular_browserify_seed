'use strict';

module.exports = /*ngInject*/
  function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/templates/home.html',
        controller: require('./controllers/home.controller'),
        controllerAs: 'vm'
      });
  };
