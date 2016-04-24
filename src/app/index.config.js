
function config ($logProvider, $stateProvider, $urlRouterProvider, $authProvider, $uiViewScrollProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(false);

  // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from
  $authProvider.baseUrl = 'api.essentialnordicwalking.com.au';
  $authProvider.loginUrl = '/api/authenticate';

  $urlRouterProvider.otherwise('/');
  $uiViewScrollProvider.useAnchorScroll();

}

export default config;
