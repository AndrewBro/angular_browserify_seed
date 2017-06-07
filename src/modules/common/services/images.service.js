'use strict';

module.exports = /*@ngInject*/
  function imagesService($http) {
    var API_DOMAIN = 'http://jsonplaceholder.typicode.com';

    this.getImages = function () {
      return $http.get(API_DOMAIN + '/photos');
    };

    this.getImageById = function (id) {
      return $http.get(API_DOMAIN + '/photos/' + id);
    };

    this.getAlbum = function (id) {
      return $http.get(API_DOMAIN + '/albums/' + id + '/photos');
    };

  };
