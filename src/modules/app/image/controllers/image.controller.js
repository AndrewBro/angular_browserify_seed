'use strict';

module.exports = /*@ngInject*/
  function barController($scope, $stateParams, imagesService) {

    var vm = this;

    imagesService.getImageById($stateParams.id)
      .then(function (resp) {
        vm.image = resp.data;
        console.log(vm.image, 'images Service');
      });
  };
