'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ServicesCtrl", ["$scope", function($scope) {
    $scope.classes = [
      {
        name: 'Class 1',
        thumb: '../images/na-group1.jpg',
        content: 'Class 1 content goes here.',
        max: 6
      },
      {
        name: 'Class 2',
        thumb: '../images/na-group2.jpg',
        content: 'Class 2 content goes here.',
        max: 6
      },
      {
        name: 'Class 3',
        thumb: '../images/na-group3.jpg',
        content: 'Class 3 content goes here.',
        max: 6
      },
    ];
    $scope.selectedClass = $scope.classes[0];
    $scope.itemSliderClick = function(item, event) {
      var button = $(event.target);
      var itemContents = $(".item-slider-content");
      $.each(itemContents, function(key, value){
        $(value).find(".item-slider-btn").removeClass("active").html("Select Class");
      });
      button.addClass("active");
      button.html("Selected");

      $scope.selectedClass = item;
    };
    $scope.range = function(num) {
      return new Array(num);
    };
  }]);
