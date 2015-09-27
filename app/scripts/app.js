'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

var app = angular.module("angularApp", ["ui.router"]);

app.run(["$rootScope", "$state", "$anchorScroll", function($rootScope, $state, $anchorScroll) {
    $rootScope.$state = $state;

    $rootScope.$on('$stateChangeStart', function (event, toState, $window) {
      console.log("Change");
    // var requireLogin = toState.data.requireLogin;
    //
    // if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
    //   event.preventDefault();
    //   // get me a login modal!
    // }
    // $anchorScroll();
  });

}]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

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
      url: "/home",
      templateUrl: "views/home.html",
    })
    .state("about", {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state("services", {
      url: "/services",
      templateUrl: "views/services.html",
    })
    .state("products", {
      url: "/products",
      templateUrl: "views/products.html",
    })
    .state("login", {
      url: "/login",
      templateUrl: "views/login.html",
    })
    .state("404", {
      templateUrl: "404.html"
    });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");
});



//
// angular
//   .module('angularApp', [
//     'ngAnimate',
//     'ngAria',
//     'ngCookies',
//     'ngResource',
//     'ui.router',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .run(function($rootScope) {
//     console.log("Hello There");
//     $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
//     var requireLogin = toState.data.requireLogin;
//
//     if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
//       event.preventDefault();
//       // get me a login modal!
//     }
//   });
//   })
//   .config(function($stateProvider){
//     $stateProvider
//       .state('home', {
//         url: '/welcome',
//         templateUrl: 'views/main.html',
//         data: {
//           requireLogin: false
//         }
//       })
//       .state('admin', {
//         abstract: true,
//         data: {
//           requireLogin: true
//         }
//       })
//       .state('admin.products', {
//
//       })
//   })
//   ;
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .when('/services', {
  //       templateUrl: 'views/services.html',
  //       controller: 'ServicesCtrl',
  //       controllerAs: 'services'
  //     })
  //     .when('/login', {
  //       templateUrl: 'views/login.html',
  //       controller: 'LoginCtrl',
  //       controllerAs: 'login'
  //     })
  //     .when('/admin/add-product', {
  //       templateUrl: 'views/auth/add-product.html',
  //       controller: 'AddProductCtrl',
  //       controllerAs: 'add-product',
  //       access: {
  //         requiresLogin: true,
  //         requiredPermissions: ['Admin'],
  //         permissionType: 'AtLeastOne'
  //       }
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // })

  // });
