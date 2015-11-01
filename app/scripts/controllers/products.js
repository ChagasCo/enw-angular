'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ProductsCtrl", ["$scope", "$sce", "$http", function($scope, $sce, $http) {
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.products = [];

    $http({
      method: 'GET',
      url: 'http://essentialnordicwalking.com.au/php/products.php'
    }).then(function successCallback(response) {
      if (response) {
        $scope.products = response.data;
      }
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

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
