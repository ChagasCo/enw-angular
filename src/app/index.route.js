import Product from './components/core/models/product';

function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider

    // App Abstract
    .state('app', {
      abstract: true,
      views: {
        '': {
          templateUrl: 'app/layouts/masterDetail.html'
        }
      }
    })

    .state('login', {
      url: '/login',
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@login': {
          templateUrl: 'app/components/login/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        }
      },
      params: {
        redirectState: undefined
      },
      resolve: {
        authenticated: function($auth, $q) {
          if ($auth.isAuthenticated()) {
            return $q.reject({code: 200});
          }
        }
      }
    })

    .state('home', {
      url: '/',
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@home': {
          templateUrl: 'app/components/home/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        }
      }
    })

    .state('about', {
      url: '/about',
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@about': {
          templateUrl: 'app/components/about/about.html',
          controller: 'AboutController',
          controllerAs: 'vm'
        }
      }
    })

    .state('services', {
      url: '/services',
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@services': {
          templateUrl: 'app/components/services/services.html',
          controller: 'ServicesController',
          controllerAs: 'vm'
        }
      }
    })

    .state('products', {
      url: '/products',
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@products': {
          templateUrl: 'app/components/products/products.html',
          controller: 'ProductsController',
          controllerAs: 'vm'
        }
      }
    })
    .state('products.view', {
      url: '/:id',
      views: {
        'content@products': {
          templateUrl: 'app/components/products/view/viewProduct.html',
          controller: 'ViewProductController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        Product: function ($q) {
          // return
        }
      }
    })
    .state('admin', {
      url: '/admin',
      abstract: true,
      parent: 'app',
      views: {
        '': {
          templateUrl: 'app/layouts/contentView.html',
        },
        'content@admin': { }
      }
    })
    .state('admin.manage', {
      url: '/manage',
      views: {
        'content@admin': {
          templateUrl: 'app/components/admin/manage/manageProducts.html',
          controller: 'ManageProductsController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        authorize: function($auth, $q) {
          var isAuth = $auth.isAuthenticated();
          if (isAuth) {
            return;
          } else {
            return $q.reject({code: 401});
          }
        }
      }
    })
    .state('admin.edit', {
      url: '/edit/:id',
      views: {
        'content@admin': {
          templateUrl: 'app/components/admin/edit/editProduct.html',
          controller: 'EditProductController',
          controllerAs: 'vm'
        }
      },
      resolve: {
        authorize: function($auth, $q) {
          var isAuth = $auth.isAuthenticated();
          if (isAuth) {
            return;
          } else {
            return $q.reject({code: 401});
          }
        }
      }
    });
    // // Dashboard
    // .state('dashboard', {
    //     url: '/',
    //     parent: 'app',
    //     views: {
    //       '': {
    //         templateUrl: 'app/layouts/toolbarContent.html'
    //       },
    //       'toolbar@dashboard': {
    //         templateUrl: 'app/components/dashboard/dashboardToolbar.html',
    //         controller: 'DashboardToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@dashboard': {
    //         templateUrl: 'app/components/dashboard/dashboard.html',
    //         controller: 'DashboardController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Dashboard');
    //       }
    //     }
    // })
    //
    //
    // /// Data Routes
    // .state('data', {
    //   url: '/data',
    //   abstract: true,
    //   parent: 'app',
    //   views: {
    //     '': {
    //       templateUrl: 'app/layouts/toolbarContent.html'
    //     },
    //     'toolbar@data': {},
    //     'content@data': {}
    //   }
    // })
    // // Makes
    // .state('data.makes', {
    //     url: '/makes',
    //     views: {
    //       'toolbar@data': {
    //         templateUrl: 'app/components/data/makes/makesToolbar.html',
    //         controller: 'MakesToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@data': {
    //         templateUrl: 'app/components/data/makes/makes.html',
    //         controller: 'MakesController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Makes');
    //       }
    //     }
    // })
    // .state("data.makes.view", {
    //   url:"/:id",
    //   onEnter: function($mdDialog, $state) {
    //     $mdDialog.show(
    //       $mdDialog.alert()
    //         // .parent(angular.element(document.querySelector('#popupContainer')))
    //         .clickOutsideToClose(true)
    //         .title('Edit Make')
    //         .textContent('You can specify some description text in here.')
    //         .ariaLabel('Alert Dialog Demo')
    //         .ok('Got it!')
    //         // .targetEasdadasdvent(ev)
    //     ).then(() => $state.go('^'));
    //   }
    // })
    // .state("data.makes.new", {
    //   url:"/new",
    //   onEnter: function($mdDialog, $state) {
    //     $mdDialog.show(
    //       $mdDialog.alert()
    //         // .parent(angular.element(document.querySelector('#popupContainer')))
    //         .clickOutsideToClose(true)
    //         .title('New Make')
    //         .textContent('You can specify some description text in here.')
    //         .ariaLabel('Alert Dialog Demo')
    //         .ok('Got it!')
    //         // .targetEvent(ev)
    //     ).then(() => $state.go('^'));
    //   }
    // })
    //
    //
    // // Patterns
    // .state('data.patterns', {
    //     url: '/patterns',
    //     views: {
    //       'toolbar@data': {
    //         templateUrl: 'app/components/data/patterns/patternsToolbar.html',
    //         controller: 'PatternsToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@data': {
    //         templateUrl: 'app/components/data/patterns/patterns.html',
    //         controller: 'PatternsController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Patterns');
    //       }
    //     }
    // })
    // // Sizes
    // .state('data.sizes', {
    //     url: '/sizes',
    //     views: {
    //       'toolbar@data': {
    //         templateUrl: 'app/components/data/makes/makesToolbar.html',
    //         controller: 'MakesToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@data': {
    //         templateUrl: 'app/components/data/makes/makes.html',
    //         controller: 'MakesController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Sizes');
    //       }
    //     }
    // })
    // // Classes
    // .state('data.classes', {
    //     url: '/classes',
    //     views: {
    //       'toolbar@data': {
    //         templateUrl: 'app/components/data/makes/makesToolbar.html',
    //         controller: 'MakesToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@data': {
    //         templateUrl: 'app/components/data/makes/makes.html',
    //         controller: 'MakesController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Classes');
    //       }
    //     }
    // })
    // // Rebates
    // .state('data.rebates', {
    //     url: '/rebates',
    //     views: {
    //       'toolbar@data': {
    //         templateUrl: 'app/components/data/makes/makesToolbar.html',
    //         controller: 'MakesToolbarController',
    //         controllerAs: 'vm'
    //       },
    //       'content@data': {
    //         templateUrl: 'app/components/data/makes/makes.html',
    //         controller: 'MakesController',
    //         controllerAs: 'vm'
    //       }
    //     },
    //     resolve: {
    //       ViewConfig: function ($q) {
    //         return new ViewConfig('Rebates');
    //       }
    //     }
    // })
    //

    // ;

  $urlRouterProvider.otherwise('/');
}

class ViewConfig {
  constructor(title) {
    this.title = title;
  }
}

export default routerConfig;
