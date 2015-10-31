'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

var app = angular.module("angularApp", ["ui.router", "angular-flexslider", "ngMaterial", "ngMdIcons"]);

app.run(["$rootScope", "$state", "$anchorScroll", function($rootScope, $state, $anchorScroll) {
    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function (event, toState, $window) {
    // var requireLogin = toState.data.requireLogin;
    //
    // if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
    //   event.preventDefault();
    //   // get me a login modal!
    // }
    // $anchorScroll();
  });

}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('orange');

  $urlRouterProvider.when("", "/");

  $urlRouterProvider.otherwise(function($injector) {
    var $state = $injector.get("$state");
    // TODO: Config 404 Page

    $state.go("404", null, {
      location: false
    });
  });
  $stateProvider
    .state("home", {
      url: "/",
      controller: "HomeCtrl",
      templateUrl: "views/home.html",
    })
    .state("about", {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state("services", {
      url: "/services",
      controller: "ServicesCtrl",
      templateUrl: "views/services.html",
    })
    .state("products", {
      url: "/products",
      controller: "ProductsCtrl",
      templateUrl: "views/products.html",
    })
    .state("login", {
      url: "/login",
      controller: "LoginCtrl",
      templateUrl: "views/login.html",
    })
    .state("404", {
      templateUrl: "404.html"
    });

    $urlRouterProvider.otherwise("/");
});

angular.module("angularApp")
  .controller("ToolbarCtrl", ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log){
      $scope.toggleLeft = buildDelayedToggler("sidenav");


      /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  }])
  .controller("MenuCtrl", ["$scope", "$timeout", "$mdSidenav", "$log", function($scope, $timeout, $mdSidenav, $log) {

    $scope.close = function() {
      $mdSidenav("sidenav").close()
        .then(function() {
          $log.debug("close LEFT is done!");
        });
    };

  }]);
