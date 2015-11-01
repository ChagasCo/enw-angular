'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("LoginCtrl", ["$scope", function ($scope) {

  	$scope.users= {
  		username: "",
  		password: ""
  	};
  }]);
