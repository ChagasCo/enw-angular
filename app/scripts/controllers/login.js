'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("LoginCtrl", ["$scope", "$state", "authenticationSvc", function ($scope, $state, authenticationSvc) {
    $scope.userInfo = null;
  	$scope.user = {
  		username: "",
  		password: ""
  	};

    $scope.loginSubmit = function() {
      console.log(JSON.stringify($scope.user));
      // Sanitize data
      // Validate data
      var username = $scope.user.username;
      var password = $scope.user.password;
      if (username.length <= 0  || password.length <= 0) {
        console.log("Username and password must be valid");
        return;
      }

      // Hash password

      // Call auth login
      authenticationSvc.login(username, password)
      .then(function(result) {
        $scope.userInfo = result;
        $state.transitionTo("add-products");
      }, function(error) {
        $window.alert("Invalid credentials");
        console.log(error);
      });
    };

  }]);
