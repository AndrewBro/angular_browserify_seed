'use strict';

module.exports = /*@ngInject*/
  function barController($scope, $stateParams, imagesService) {

    var vma = this;
    var albums;
    var indexx = 0;
    vma.albums = [];

    imagesService.getAlbum($stateParams.id)
      .then(function (resp) {
        albums = resp.data;
        // console.log(vma.albumId , 'vma');
        // console.log(albums.albumId, 'albums.albumId !!');
        vma.addMoreAlbums();
      });

    vma.addMoreAlbums = function () {
      if (!albums) {
        return;
      }
      vma.albums = angular.copy(albums).slice(0, indexx += 6);
      console.log(vma.albums.albumId, 'vma.albums.albumId !!');
      console.log(vma.albums.id, 'vma.albums.id !!');

    };
  };
