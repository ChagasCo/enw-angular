'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

var app = angular.module("angularApp", ["ui.router", "angular-flexslider", "ngMaterial", "ngMdIcons", "ngFileUpload", "ngAnimate", "ngAria", "ngMessages"]);

app.run(["$rootScope", "$location", "$state", "authenticationSvc", "$stateParams", "$anchorScroll", function($rootScope, $location, $state, authenticationSvc, $stateParams, $anchorScroll) {
    // $rootScope.$state = $state;

  $rootScope.$on('$stateChangeStart', function (auth) {
    if ($stateParams.scrollTo){
      $location.hash($stateParams.scrollTo);
      $anchorScroll();
    }
    $rootScope.auth = authenticationSvc.isAuth();
  });

  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    if (error && error.authenticated === false) {
      // Go to Login
      $state.transitionTo("login");
    }
  });

}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $uiViewScrollProvider) {
  $uiViewScrollProvider.useAnchorScroll();

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
    // resolve block returns a promise object on completion
    // resolve decides whether or not the client shall view the route.
    .state("add-products", {
      url: "/add-products",
      controller: "AddProductsCtrl",
      templateUrl: "views/add-products.html",
      resolve: {
        auth: function($q, authenticationSvc) {
          var userInfo = authenticationSvc.getUserInfo();
          if (userInfo) {
            return $q.when(userInfo);
          } else {
            return $q.reject({authenticated: false});
          }
        }
      }
    })
    .state("404", {
      templateUrl: "404.html"
    });

    $urlRouterProvider.otherwise("/");
});

angular.module("angularApp")
  .controller("ToolbarCtrl", ["$scope", "$timeout", "$mdSidenav", "$log", "authenticationSvc", "$state", function($scope, $timeout, $mdSidenav, $log, authenticationSvc, $state){
      $scope.toggleLeft = buildDelayedToggler("sidenav");

      $scope.logout = function() {
        authenticationSvc.logout();
        $state.transitionTo("home");
      }


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
  .controller("MenuCtrl", ["$scope", "$timeout", "$mdSidenav", "$log", "authenticationSvc", "$state", function($scope, $timeout, $mdSidenav, $log, authenticationSvc, $state) {

    $scope.close = function() {
      $mdSidenav("sidenav").close();
    };

    $scope.logout = function() {
      authenticationSvc.logout();
      $state.transitionTo("home");

      $scope.close();
    }

  }]);
