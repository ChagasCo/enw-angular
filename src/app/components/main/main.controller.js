class MainController {
  constructor($auth, $state) {
    'ngInject';

    this.auth = $auth;
    this.$state = $state;
  }

  logout() {
    this.auth.logout();
    this.$state.go("home", {});
  }
}

export default MainController;
