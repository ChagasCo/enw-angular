'use-scrict';

/**
 * @ngdoc function
 * @name angularApp.controller:AddProductsCtrl
 * @description
 * # AddProductsCtrl
 * Controller of the angularApp
 */
 angular.module("angularApp")
 	.controller("AddProductsCtrl", ["$scope", "$http", "$sce", function($scope, $http, $sce) {
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

    $scope.saveProduct = function(product) {

    }
 	}]);
