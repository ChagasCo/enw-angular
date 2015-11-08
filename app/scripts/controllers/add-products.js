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

      $scope.isUpdate = true;
      $scope.initAddProduct = function() {
        // $scope.isUpdate = false;
      }
      $scope.newProduct = {
        name: "",
        manufacturer: "",
        content: "",
        thumb: "",
        price: ""
      };
      // $scope.products = [];
      $scope.products = [
        {
          id: 1,
          name: "Product 1",
          manufacturer: "Leki",
          content: "Some description",
          thumb: "http://www.wildearth.com.au/assets/full/6322156.png",
          price: 179.50
        },
        {
          id: 2,
          name: "Product 2",
          manufacturer: "Leki",
          content: "Some description",
          thumb: "http://www.wildearth.com.au/assets/full/6322156.png",
          price: 179.50
        },
        {
          id: 3,
          name: "Product 3",
          manufacturer: "Leki",
          content: "Some description",
          thumb: "http://www.wildearth.com.au/assets/full/6322156.png",
          price: 179.50
        },
        {
          id: 4,
          name: "Product 4",
          manufacturer: "Leki",
          content: "Some description",
          thumb: "http://www.wildearth.com.au/assets/full/6322156.png",
          price: 179.50
        }
      ];

      // $http({
      //   method: 'GET',
      //   url: 'http://essentialnordicwalking.com.au/php/products.php'
      // }).then(function successCallback(response) {
      //   if (response) {
      //     $scope.products = response.data;
      //     console.log($scope.products);
      //   }
      // }, function errorCallback(response) {
      //   // called asynchronously if an error occurs
      //   // or server returns response with an error status.
      // });

  		$scope.selectedProduct = $scope.products[0];

      $scope.productSelect = function(product, $event) {
        // $scope.isUpdate = true;

        var button = $(event.target);

        var itemContents = $(".product-card");
        $.each(itemContents, function(key, value){
          $(value).find(".class-btn").removeClass("active").html("Select");
        });
        button.addClass("active");
        button.html("Selected");


        $scope.selectedProduct = product;
      };

      $scope.saveProduct = function(product) {

      }

      $scope.addProduct = function() {

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
