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
import EmailService from './components/core/email/email.service';

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
  .service('EmailService', EmailService)
  ;
