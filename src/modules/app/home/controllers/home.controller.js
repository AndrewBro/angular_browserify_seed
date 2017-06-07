'use strict';

module.exports = /*@ngInject*/
  function barController($scope, imagesService) {
    var vm = this;
    var images;
    var index = 0;
    vm.images = [];

    imagesService.getImages()
      .then(function (resp) {
        images = resp.data;
        vm.addMoreImages();
      });

    vm.addMoreImages = function () {
      if (!images) {
        return;
      }
      vm.images = angular.copy(images).slice(0, index += 6);
      console.log(vm.images, 'vm.images !!');
    };

  };
