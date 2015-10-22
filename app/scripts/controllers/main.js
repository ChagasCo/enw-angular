'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['$scope',function ($scope) {

    $scope.images = [
      {
        image: '../images/promo-slider/promo1.jpg',
        alt: 'Test',
        title: 'Weight Loss',
        content: 'Nordic Walkers plant the poles in front of them with an outstretched arm, creating a full body movement and using 90 per cent of the body\'s muscles.'
      },
      {
        image: '../images/promo-slider/promo2.jpg',
        alt: 'Test',
        title: 'Promo 2',
        content: '...'
      },
      {
        image: '../images/promo-slider/promo3.jpg',
        alt: 'Test',
        title: 'Promo 3',
        content: 'Nordic Walkers plant the poles in front of them with an outstretched arm, creating a full body movement and using 90 per cent of the body\'s muscules.'
      },
      {
        image: '../images/promo-slider/promo4.jpg',
        alt: 'Test',
        title: 'Promo 4',
        content: 'Nordic Walkers plant the poles in front of them with an outstretched arm, creating a full body movement and using 90 per cent of the body\'s muscules.'
      }
    ];
  }]);
