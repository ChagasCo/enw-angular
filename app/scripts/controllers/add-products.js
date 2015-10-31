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

 		$scope.products = [
	 		{
	 			id: 1,
        name: "Product 1",
        manufacturer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 45.00,
        description: "Lot of content. possibily html?"
	 		},

	 		{
	 			id: 2,
        name: "Product 1",
        manufacturer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 59.00,
        description: "Lot of content. possibily html?"
	 		},

	 		{
	 			id: 3,
        name: "Product 1",
        manufacturer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 99.00,
        description: "Lot of content. possibily html?"
	 		},

	 		{
	 			id: 4,
        name: "Product 1",
        manufacturer: "Leki",
        thumb: "../images/demo-product.jpg",
        price: 09000009.00,
        description: "Lot of content. possibily html?"
	 		}
 		];

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