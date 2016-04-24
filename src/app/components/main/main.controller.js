class MainController {
  constructor($auth, $state, $mdToast, $timeout) {
    'ngInject';

    this.auth = $auth;
    this.$state = $state;
    this.mdToast = $mdToast;
    this.heatherContact = "0417 943 141";
    this.timeout = $timeout;
  }

  logout() {
    this.auth.logout();
    this.timeout(()=> {
      this.$state.go("home", {});
      window.location.reload(true);
    }, 500);
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
