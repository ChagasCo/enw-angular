(function() {
  "use strict";
  angular.module("angularApp")
    .controller("HomeCtrl", ["$scope", "$sce", "$state", "emailSvc", "$mdToast", "$document", function($scope, $sce, $state, emailSvc, $mdToast, $document) {
      $scope.trustAsHtml = $sce.trustAsHtml;

      $scope.cards = [
        {
          image: "../images/cards/card1.jpg",
          subtitle: "Introduction",
          title: "Have a Go Sessions",
          content: "Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.",
          navigate: function() {
            // Navigate with UI Router
            $state.go("services", {
              "#": "have-a-go"
            });
          }
        },
        {
          image: "../images/cards/card2.jpg",
          subtitle: "Equipment",
          title: "Buy or Hire Equipment",
          content: "Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire them for each session or purchase your own.",
          navigate: function() {
            $state.go("products", {
              "#": "equipment"
            });
          }
        },
        {
          image: "../images/cards/card3.jpg",
          title: "Range of Group Classes",
          subtitle: "Classes",
          content: "Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next level and try out the course today.",
          navigate: function() {
            $state.go("services", {
              "#": "group-classes"
            });
          }
        }
      ];

      $scope.images = [
        {
          image: '../images/promo-slider/promo1.jpg',
          title: 'Weight Loss',
          content: 'Nordic Walkers plant the poles in front of them with an outstretched arm, creating a full body movement and using 90 per cent of the body\'s muscles.'
        },
        {
          image: '../images/promo-slider/promo2.jpg',
          title: 'Challenge Your Brain',
          content: 'Whenever you learn something new, you stimulate your brain. Research shows that activities which combine cognitive, physical and social aspects are especially beneficial for brain health. <br>(SEO - Cognitive, Brain Health)'
        }
      ];

      $scope.register = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        preferredCallBack: ""
      };

      $scope.registerSubmitProcessing = false;
      $scope.registerSubmit = function() {
        $scope.registerSubmitProcessing = true;

        var message = "Hello Heather, <br /><br />You have received an enquiry regarding an expression of interest.<br /><br /><br />Contact Name: " + $scope.register.firstName + " " + $scope.register.lastName + "<br/>Contact Email: " + $scope.register.email  + "<br/>Contact Phone: " + $scope.register.phone + " <br />Preferred Callback Time: " + $scope.register.preferredCallBack + "<br /><br /><hr />";
        var fromAddress = $scope.register.email;

        emailSvc.sendEmail(message, fromAddress)
        .then(function(result) {
          console.log(result);
          $mdToast.show({
            template: "<md-toast>" + result.message + "</md-toast>",
            parent: $document[0].querySelector("#registerToast"),
            hideDelay: 4000,
            position: "bottom"
          });

          // Reset values
          $scope.register = angular.copy({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            preferredCallBack: ""
          });

          $scope.registerForm.$setPristine();
          $scope.registerForm.$setValidity();
          $scope.registerForm.$setUntouched();

          $scope.registerSubmitProcessing = false;
        }, function(error) {
          $mdToast.show({
            template: "<md-toast>" + error + "</md-toast>",
            parent: $document[0].querySelector("#registerToast"),
            hideDelay: 4000,
            position: "bottom"
          });
          $scope.registerSubmitProcessing = false;
        });
      };

  }]);
})();
