(function() {
  "use strict";
  angular.module("angularApp")
    .controller("HomeCtrl", ["$scope", "$sce", function($scope, $sce) {
      $scope.trustAsHtml = $sce.trustAsHtml;

      $scope.cards = [
        {
          image: "../images/cards/card1.jpg",
          subtitle: "Introduction",
          title: "Have a Go Sessions",
          content: "Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.",
          navigate: function() {
            // Navigate with UI Router
            alert("Go to Have a go session");
          }
        },
        {
          image: "../images/cards/card2.jpg",
          subtitle: "Equipment",
          title: "Buy or Hire Equipment",
          content: "Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire them for each session or purchase your own.",
          navigate: function() {
            alert("Go to Equipment");
          }
        },
        {
          image: "../images/cards/card3.jpg",
          title: "Range of Group Classes",
          subtitle: "Classes",
          content: "Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next level and try out the course today.",
          navigate: function() {
            alert("Go to Group Classes");
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
        phoneNumber: "",
        preferedCallBack: ""
      };

      $scope.registerSubmit = function() {
        // TODO: Validate inputs
        alert("Handle Form Submit");
      }

  }]);
})();
