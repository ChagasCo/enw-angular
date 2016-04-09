
function config ($logProvider, $stateProvider, $urlRouterProvider, $authProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from
  $authProvider.baseUrl = 'http://localhost:8000';
  $authProvider.loginUrl = '/api/authenticate';

  $urlRouterProvider.otherwise('/');
}

export default config;
