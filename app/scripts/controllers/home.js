angular.module("angularApp")
  .controller("HomeCtrl", ["$scope", function($scope) {
    // <div class="col-xs-12 col-sm-6 col-md-4 card-container">
    //     <div class="card">
    //       <a href="#Card1">
    //         <img class="img-responsive" src="../images/cards/card1.jpg" alt="Have a Go Sessions">
    //         <div class="card-content">
    //           <h4>Classes</h4>
    //           <h3>Have a Go Sessions</h3>
    //           <p>
    //             Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.
    //           </p>
    //         </div>
    //       </a>
    //     </div>
    // </div>

    $scope.cards = [
      {
        image: "../images/cards/card1.jpg",
        title: "Have a Go Sessions",
        content: "Learn the core fundametals of Nordic Walking, and experience a <strong>free</strong> training session.",
        navigate: function() {
          // Navigate with UI Router
          console.log("Go to Have a go session");
        }
      },
      {
        image: "../images/cards/card2.jpg",
        title: "Buy or Hire Equipment",
        content: "Learn how to use the core equipment needed for Nordic Walking and have the opportunity to hire them for each session or purchase your own.",
        navigate: function() {
          console.log("Go to Equipment");
        }
      },
      {
        image: "../images/cards/card3.jpg",
        title: "Range of Group Classes",
        content: "Experience a 4 session course with a group of fellow Nordic Walkers. Take your skills to the next level and try out the course today.",
        navigate: function() {
          console.log("Go to Group Classes");
        }
      }
    ];

    $scope.register = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      preferedCallBack: ""
    };

  }]);
