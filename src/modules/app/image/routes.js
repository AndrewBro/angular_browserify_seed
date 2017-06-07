'use strict';

module.exports = /*ngInject*/
  function ($stateProvider) {
    $stateProvider
      .state('image', {
        url: '/image/:id',
        templateUrl: 'app/image/templates/image.html',
        controller: require('./controllers/image.controller'),
        controllerAs: 'vmImg'
      });
  };
