'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ProductsCtrl", ["$scope", "$sce", "$http", "products", function($scope, $sce, $http, products) {
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.products = products;



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
