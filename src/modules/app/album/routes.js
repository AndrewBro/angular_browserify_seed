'use strict';

module.exports = /*ngInject*/
  function ($stateProvider) {
    $stateProvider
      .state('album', {
        url: '/album/:id/photos',
        templateUrl: 'app/album/templates/album.html',
        controller: require('./controllers/album.controller'),
        controllerAs: 'vma'
      });
  };
