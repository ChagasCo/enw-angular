function runBlock ($log, $rootScope, $state, $auth) {
  'ngInject';
  $log.debug('runBlock end');


  $rootScope.$on('$stateChangeError', (event, toState, toStateParams, fromState, fromStatParams, error) => {
    if (!angular.isDefined(error.code)) { // unable to identity error, just go to home
      $state.go('home', {});
    } else {
      // grab the code
      var errorCode = error.code;

      if (errorCode == 401 && !$auth.isAuthenticated()) { // go to login page
        $state.go('login', {redirectState: 'admin.manage'});
      } else if (errorCode == 200) {
        $state.go('home', {});
      } else {
        alert('Unkown error occured. Please contact heather@essentialnordicwalking.com.au');
      }
    }
  });
}
export default runBlock;
