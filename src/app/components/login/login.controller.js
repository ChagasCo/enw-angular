class LoginController {
  constructor($auth, $state, $stateParams) {
    'ngInject';

    this.$auth = $auth;
    this.$state = $state;

    this.credentials = {
      email: "",
      password: ""
    };
    this.loginValidating = false;

    this.redirectState = $state.params.redirectState;
  }

  login() {
    // Use Satellizer's $auth service to login
    this.$auth.login(this.credentials)
      .then((data) => {
        // If login successful, redirect to the addProduct state
        if (angular.isDefined(this.redirectState)){
          if(this.$state.get(this.redirectState)) {
            this.$state.go(this.redirectState, {});
            return;
          }
        }
        this.$state.go("home", {});
      });
  }
}

export default LoginController;
