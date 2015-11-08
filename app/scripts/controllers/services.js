'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the angularApp
 */
angular.module("angularApp")
  .controller("ServicesCtrl", ["$scope", "$http", "$sce", "$mdToast", "emailSvc", "$document", function($scope, $http, $sce, $mdToast, emailSvc, $document) {
    $scope.trustAsHtml = $sce.trustAsHtml;

    $scope.haveAGoSession = {
      name: "",
      email: "",
      phone: ""
    };

    $scope.haveAGoSessionSubmit = function() {
      console.log(JSON.stringify($scope.haveAGoSession));

      // TODO: Validate data before posting
      // TODO: Show error message if invalid. md-input has a hanlder for error messages

      // $http.post("http://essentialnordicwalking.com.au/data/haveAGo.php", JSON.stringify(haveAGoSession)).success(function() {
      //   console.log("done");
      // });
    };


    $scope.classes = [
      {
        name: 'Heart Foundation Walking Group',
        thumb: '../images/baltas-patrick.jpg',
        content: '<strong>REPS ROMERS</strong> (Anyone welcome to join)<br><br>Moderate pace walks. It is opportunity to keep Nordic Walking and meet new people. Register your interest to find out more. <br><br> Join us after you\'ve experienced the Have a Go Session. <br><br>* Pole Hire Price $5.00'
      },
      {
        name: 'Once a Week for 4 Weeks',
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
      class: $scope.classes[0].name,
      name: "",
      phone: "",
      email: "",
      equipment: "No"
    };
    
    $scope.classesFormProcessing = false;
    $scope.classesSubmit = function() {
      $scope.classesFormProcessing = true;

      var message = "Hello Heather, <br /><br />You have received an enquiry about the range of Classes.<br /><br /><br /><strong>Class:</strong> " + $scope.classesFormData.class + "<br/><strong>Contact Name:</strong> " + $scope.classesFormData.name + "<br /><strong>Email:</strong> " + $scope.classesFormData.email + " <br /><strong>Phone:</strong> " + $scope.classesFormData.phone + "<br /><strong>Equipment:</strong> " + $scope.classesFormData.equipment + "<br /><br /><hr />";
      var fromAddress = $scope.classesFormData.email;

      emailSvc.sendEmail(message, fromAddress)
      .then(function(result) {
        $mdToast.show({
          template: "<md-toast>" + result.message + "</md-toast>",
          parent: $document[0].querySelector("#classesToast"),
          hideDelay: 4000,
          position: "bottom"
        });

        // Reset values
        $scope.classesFormData = angular.copy({
          class: $scope.classes[0].name,
          name: "",
          phone: "",
          email: "",
          equipment: "No"
        });

        $scope.classesForm.$setPristine();
        $scope.classesForm.$setValidity();
        $scope.classesForm.$setUntouched();

        $scope.classesFormProcessing = false;
      }, function(error) {
        $mdToast.show({
          template: "<md-toast>" + error + "</md-toast>",
          parent: $document[0].querySelector("#classesToast"),
          hideDelay: 4000,
          position: "bottom"
        });
      });
    };


    $scope.itemSliderClick = function(item, event) {
      var button = $(event.target);
      var itemContents = $(".walk-class");
      $.each(itemContents, function(key, value){
        $(value).find(".class-btn").removeClass("active").html("Select Class");
      });
      button.addClass("active");
      button.html("Selected");

      $scope.classesFormData.class = item.name;
    };
    $scope.range = function(num) {
      return new Array(num);
    };

    $scope.presentation = {
      name: "",
      organisationName: "",
      email: "",
      phone: ""
    };

    $scope.presentationSubmit = function() {
      alert("Presentation data: " + JSON.stringify($scope.presentation));
      // Call email services
    };

  }]);
