
function config ($logProvider, $stateProvider, $urlRouterProvider, $authProvider, $uiViewScrollProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from
  $authProvider.baseUrl = 'http://essentialnordicwalking.com.au/enw/public';
  $authProvider.loginUrl = '/api/authenticate';

  $urlRouterProvider.otherwise('/');
  $uiViewScrollProvider.useAnchorScroll();

  filepicker.setKey('AuBOzXm5MRyZQEErCSWL6z');
}

export default config;
