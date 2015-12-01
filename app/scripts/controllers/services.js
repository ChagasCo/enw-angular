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

    $scope.haveAGoFormProcessing = false;
    $scope.haveAGoSessionSubmit = function() {
      $scope.haveAGoFormProcessing = true;

      var message = "Hello Heather, <br /><br />You have received an enquiry about a Have A Go Session.<br /><br /><br />Contact Name: " + $scope.haveAGoSession.name + "<br/>Contact Email: " + $scope.haveAGoSession.email + " <br />Contact Phone: " + $scope.haveAGoSession.phone + "<br /><br /><hr />";
      var fromAddress = $scope.haveAGoSession.email;

      emailSvc.sendEmail(message, fromAddress)
      .then(function(result) {
        $mdToast.show({
          template: "<md-toast>" + result.message + "</md-toast>",
          parent: $document[0].querySelector("#haveAGoToast"),
          hideDelay: 4000,
          position: "bottom"
        });

        // Reset values
        $scope.haveAGoSession = angular.copy({
          name: "",
          email: "",
          phone: ""
        });

        $scope.haveAGoForm.$setPristine();
        $scope.haveAGoForm.$setValidity();
        $scope.haveAGoForm.$setUntouched();

        $scope.haveAGoFormProcessing = false;
      }, function(error) {
        $mdToast.show({
          template: "<md-toast>" + error + "</md-toast>",
          parent: $document[0].querySelector("#haveAGoToast"),
          hideDelay: 4000,
          position: "bottom"
        });
      });
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

    $scope.presentationFormProcessing = false;
    $scope.presentationSubmit = function() {
      $scope.presentationFormProcessing = true;

      var message = "Hello Heather, <br /><br />You have received an enquiry about a presentation.<br /><br /><br />Contact Name: " + $scope.presentation.name + "<br/>Contact Organisation Name: " + $scope.presentation.organisationName + "<br />Contact Email: " + $scope.presentation.email + " <br />Contact Phone: " + $scope.presentation.phone + "<br /><br /><hr />";
      var fromAddress = $scope.presentation.email;

      emailSvc.sendEmail(message, fromAddress)
      .then(function(result) {
        $mdToast.show({
          template: "<md-toast>" + result.message + "</md-toast>",
          parent: $document[0].querySelector("#presentationToast"),
          hideDelay: 4000,
          position: "bottom"
        });

        // Reset values
        $scope.presentation = angular.copy({
          name: "",
          organisationName: "",
          email: "",
          phone: ""
        });

        $scope.presentationForm.$setPristine();
        $scope.presentationForm.$setValidity();
        $scope.presentationForm.$setUntouched();

        $scope.presentationFormProcessing = false;
      }, function(error) {
        $mdToast.show({
          template: "<md-toast>" + error + "</md-toast>",
          parent: $document[0].querySelector("#presentationToast"),
          hideDelay: 4000,
          position: "bottom"
        });
      });
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

  }]);
