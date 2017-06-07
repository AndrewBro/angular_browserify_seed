'use strict';

module.exports = /*@ngInject*/
  function barController($scope, $stateParams, imagesService) {

    var vma = this;
    var albums;
    var indexx = 0;
    vma.albums = [];

    imagesService.getAlbum($stateParams.id)
      .then(function (resp) {
        vma.albums = resp.data;
        console.log(vma.albums, 'albums Service');
        vma.addMoreImages();
      });



    vma.addMoreImages = function () {
      if (!albums) {
        return;
      }
      vma.albums = angular.copy(albums).slice(0, indexx += 6);
      console.log(vma.albums, 'vma.albums !!')
    };

  };
