'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ProductsCtrl", ["$scope", function($scope) {
    $scope.products = [
      {
        id: 1,
        name: "Product 1",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 2,
        name: "Product 2",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 3,
        name: "Product 3",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 4,
        name: "Product 4",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 5,
        name: "Product 5",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 6,
        name: "Product 6",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 7,
        name: "Product 7",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 8,
        name: "Product 8",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 9,
        name: "Product 9",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 10,
        name: "Product 10",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 11,
        name: "Product 11",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 12,
        name: "Product 12",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 13,
        name: "Product 13",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 14,
        name: "Product 14",
        manufactuer: "Leki",
        thumb: "../images/yeoman.png",
        price: 49.00,
        description: "Lot of content. possibily html?"
      }
    ];

    $scope.selectedProduct = $scope.products[0];
}]);
