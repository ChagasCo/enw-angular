'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ProductsCtrl", ["$scope", "$sce", function($scope, $sce) {
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.products = [
      {
        id: 1,
        name: "Product 1 Product 1 4",
        manufactuer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 49.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><ul><li>lorem</li><li>lorem</li><li>Lorem</li><li>Lorem</li><li>Lorem</li></ul>"
      },
      {
        id: 2,
        name: "Product 2",
        manufactuer: "Leki",
        thumb: "http://cdn.norwaysports.com/i/l/lowa-solera-low-trail-shoes-mens-9022-f",
        price: 61.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 3,
        name: "Touri Stick (Pair)",
        manufactuer: "Tsl Outdoor",
        thumb: "http://aws.tradeinn.com/d/1/17985/tsl-outdoor-touri-stick-pair-.jpg",
        price: 63.95,
        description: "This 100% glass fibre pole comes with a simple, comfortable strap and an Asphalt Pad.<br><br><ul><li>Material: 100% glass-fibre</li><li>Material handle: polymer</li><li>Strap: Classic</li><li>Tungsten tip</li><li>PAD: Classic</li><li>100 > 130cm / 39 > 51\"</li><li>200g (115cm) x 2</li><li>0,42lbs (45\") x2</li></ul>"
      },
      {
        id: 1,
        name: "Product 1 Product 1 4",
        manufactuer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 49.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><ul><li>lorem</li><li>lorem</li><li>Lorem</li><li>Lorem</li><li>Lorem</li></ul>"
      },
      {
        id: 2,
        name: "Product 2",
        manufactuer: "Leki",
        thumb: "http://cdn.norwaysports.com/i/l/lowa-solera-low-trail-shoes-mens-9022-f",
        price: 61.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 1,
        name: "Product 1 Product 1 4",
        manufactuer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 49.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><ul><li>lorem</li><li>lorem</li><li>Lorem</li><li>Lorem</li><li>Lorem</li></ul>"
      },
      {
        id: 2,
        name: "Product 2",
        manufactuer: "Leki",
        thumb: "http://cdn.norwaysports.com/i/l/lowa-solera-low-trail-shoes-mens-9022-f",
        price: 61.00,
        description: "Lot of content. possibily html?"
      },
      {
        id: 1,
        name: "Product 1 Product 1 4",
        manufactuer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 49.00,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><ul><li>lorem</li><li>lorem</li><li>Lorem</li><li>Lorem</li><li>Lorem</li></ul>"
      },
      {
        id: 2,
        name: "Product 2",
        manufactuer: "Leki",
        thumb: "http://cdn.norwaysports.com/i/l/lowa-solera-low-trail-shoes-mens-9022-f",
        price: 61.00,
        description: "Lot of content. possibily html?"
      },
    ];

    $scope.selectedProduct = $scope.products[0];

    $scope.productSelect = function(product, $event) {
      console.log(JSON.stringify(product));
      var _this = $(event.target);

      if (!_this.hasClass("product-card")) {
        _this = _this.parent();
      }

      var itemContents = $(".product-card");
      $.each(itemContents, function(key, value){
        $(value).removeClass("active");
      });
      _this.addClass("active");

      $scope.selectedProduct = product;
    };
}]);
