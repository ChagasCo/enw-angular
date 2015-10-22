'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ServicesCtrl", ["$scope", "$http", "$sce", function($scope, $http, $sce) {
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.haveAGoSession = {
      name: "",
      email: "",
      phone: "",
      hire: 1
    };

    $scope.haveAGoSessionSubmit = function() {
      console.log("posting data....");
      console.log(JSON.stringify($scope.haveAGoSession));

      // TODO: Validate data before posting
      // TODO: Show error message if invalid. md-input has a hanlder for error messages

      // $http.post("http://essentialnordicwalking.com.au/data/haveAGo.php", JSON.stringify(haveAGoSession)).success(function() {
      //   console.log("done");
      // });
    };

    $scope.classesSubmit = function() {
      console.log("process data");
    };

    $scope.classes = [
      {
        name: 'Heart Foundation Walking Group',
        thumb: '../images/baltas-patrick.jpg',
        content: '<strong>REPS ROMERS</strong> (Anyone welcome to join)<br><br>Moderate pace walks. It is opportunity to keep Nordic Walking and meet new people. Register your interest to find out more. <br><br> Join us after you\'ve experienced the Have a Go Session. <br><br>* Pole Hire Price $5.00'
      },
      {
        name: 'Once a Week for 4 Week',
        thumb: '../images/vermont-south-seniors.jpg',
        content: 'Participate in one Nordic Walks once a week for four weeks. If you\'re interested in being a more active Nordic Walker, then join us for 1 hour session for four weeks.<br><br><br>* We can also come to your location if requested over the phone.'
      },
      {
        name: '4 Weeks in 1 Walk',
        thumb: '../images/nordic-senior3.jpg',
        content: 'Ready to take it to the next level? Join this 2 to 3 hour session (depending on the group size) and learn the complete technique.<br><br><br>* We can also come to your location if requested over the phone.'
      }
    ];

    $scope.classesFormData = {
      class: $scope.classes[0],
      name: "",
      phone: "",
      equipment: 1,
      attendees: $scope.classes[0].attendees
    };

    $scope.itemSliderClick = function(item, event) {
      var button = $(event.target);
      var itemContents = $(".walk-class");
      $.each(itemContents, function(key, value){
        $(value).find(".class-btn").removeClass("active").html("Select Class");
      });
      button.addClass("active");
      button.html("Selected");

      $scope.classesFormData.class = item;
    };
    $scope.range = function(num) {
      return new Array(num);
    };

    $scope.presentation = [
      {
        name: "",
        organisationName: "",
        email: "",
        phone: ""
      }
    ];

    $scope.presentationSubmit = function() {
      // TODO: Handle submit
      alert("Presentation data: " + JSON.stringiy(presentation));
    }

  }]);
