class MainController {
  constructor($auth, $state, $mdToast) {
    'ngInject';

    this.auth = $auth;
    this.$state = $state;
    this.mdToast = $mdToast;
  }

  logout() {
    this.auth.logout();
    this.$state.go("home", {});
  }

  broadcastToast(message) {
    this.mdToast
      .show(
        this.mdToast
          .simple()
          .textContent(message)
          .position("right")
          .hideDelay(3000)
          .parent("#toast")
    );
  }
}

export default MainController;
