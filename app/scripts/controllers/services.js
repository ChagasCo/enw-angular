'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ServicesCtrl", ["$scope", "$http", function($scope, $http) {
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
        name: 'Heart Foundation',
        thumb: '../images/na-group1.jpg',
        content: 'REPS ROMERS  $5.00 Pole Hire.',
        attendees: [
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          }
        ]
      },
      {
        name: 'Class 2',
        thumb: '../images/na-group2.jpg',
        content: 'Class 2 content goes here. Once a week for 4 weeks. 1 hour session',
        // Inject html radio options
        attendees: [
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          }
        ]
      },
      {
        name: 'Class 3',
        thumb: '../images/na-group3.jpg',
        content: 'Class 3 content goes here. 4 weeks in 1, for 2 to 3 hours',
        attendees: [
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          },
          {
            name: ""
          }
        ]
      }
    ];

    $scope.classesFormData = {
      class: $scope.classes[0],
      name: "",
      phone: "",
      equipment: 1,
      attendees: $scope.classes[0].attendees
    };

    // $scope.selectedClass = $scope.classes[0];
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
  }]);
