(function() {
  "use strict";

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
          console.log($scope.products);
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

      // upload on file select or drop
      $scope.upload = function (file) {
          Upload.upload({
              url: "http://essentialnordicwalking.com.au/php/add-product.php",
              data: {file: file, "username": $scope.username, "password": $scope.password}
          }).then(function (resp) {
              console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          }, function (resp) {
              console.log('Error status: ' + resp.status);
          }, function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
      };
  	}]);
})();
