class ToolbarController {
  constructor($mdSidenav, $timeout, $log, $state) {
    'ngInject';

    this.mdSidenav = $mdSidenav;
    this.timeout = $timeout;
    this.log = $log;
    this.state = $state;
  }

  toggleLeft() {
    this.mdSidenav("sidenav")
      .toggle();
  }


}

export default ToolbarController;
