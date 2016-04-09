import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
/// Controllers
import MainController from './components/main/main.controller';
import HomeController from './components/home/home.controller';
import AboutController from './components/about/about.controller';
import ServicesController from './components/services/services.controller';
import ProductsController from './components/products/products.controller';
import ViewProductController from './components/products/view/viewProduct.controller';
import LoginController from './components/login/login.controller';
/// Services
import ProductsService from './components/core/data/products.service';

import ManageProductsController from './components/admin/manage/manageProducts.controller';
import EditProductController from './components/admin/edit/editProducts.controller';


// Init angular
angular
  .module('enw', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'angular-flexslider',
    'satellizer'
  ])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('API', {
    url: 'http://localhost:8000/api'
  })

  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .controller('ServicesController', ServicesController)
  .controller('ProductsController', ProductsController)
  .controller('ViewProductController', ViewProductController)
  .controller('ManageProductsController', ManageProductsController)
  .controller('EditProductController', EditProductController)
  .controller('LoginController', LoginController)

  .service('ProductsService', ProductsService)
  // Constants
  // .constant()
  // Config
  // .config()
  // Run Blocks
  // .run()
  // Controllers
  // Services
  // .service()
  // directive
  // .directive()
  ;


//
// angular.module('espwiki', [
//   'ngAnimate',
//   'ngAria',
//   'ngCookies',
//   'ngSanitize',
//   'ui.router',
//   'ngMaterial'])
//   // .constant('malarkey', malarkey)
//   // .constant('toastr', toastr)
//   // .constant('moment', moment)
//   // .service('githubContributor', GithubContributorService)
//   // .service('webDevTec', WebDevTecService)
//   .controller('MainController', MainController)
//
//   // .controller('SearchController', SearchController)
//   // .controller('SearchToolbarController', SearchToolbarController)
//
//   .controller('DashboardController', DashboardController)
//   .controller('DashboardToolbarController', DashboardToolbarController)
//
//   // Data Routes
//   .controller('MakesController', MakesController)
//   .controller('MakesToolbarController', MakesToolbarController)
//   .service('MakesService', MakesService)
//
//   .controller('PatternsController', PatternsController)
//   .controller('PatternsToolbarController', PatternsToolbarController)
//   .service('PatternsService', PatternsService)
//
//   .directive('sidenav', () => new SideNavDirective())
//   .directive('userAvatar', () => new UserAvatarDirective())
//   // .directive('acmeNavbar', () => new NavbarDirective())
//   // .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
// ;


// import MainController from './main/main.controller';

// import SearchController from '../app/components/search/search.controller';
// import SearchToolbarController from '../app/components/search/searchToolbar.controller';

// import DashboardController from '../app/components/dashboard/dashboard.controller';
// import DashboardToolbarController from '../app/components/dashboard/dashboardToolbar.controller';

// Data Route Controllers
// import MakesController from '../app/components/data/makes/makes.controller';
// import MakesToolbarController from '../app/components/data/makes/makesToolbar.controller';
// import MakesService from '../app/components/core/data/makes.service';

// import PatternsController from '../app/components/data/patterns/patterns.controller';
// import PatternsToolbarController from '../app/components/data/patterns/patternsToolbar.controller';
// import PatternsService from '../app/components/core/data/patterns.service';

// import UserAvatarDirective from '../app/components/userAvatar/userAvatar.directive';

// import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
// import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
// import NavbarDirective from '../app/components/navbar/navbar.directive';
// import SideNavDirective from '../app/components/sidenav/sidenav.directive';
// import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';
