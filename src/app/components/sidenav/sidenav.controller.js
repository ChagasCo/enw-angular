class SideNavController {
  constructor($mdSidenav) {
    'ngInject';

    this.sideNav = $mdSidenav;
    this.navItems = this.getNavItems();
  }

  getNavItems() {
    return [
      new NavItem("Home", "home"),
      new NavItem("About", "about"),
      new NavItem("Services", "services"),
      new NavItem("Products", "products")
    ];
  }

  close() {
    this.sideNav("sidenav")
      .close();
  }
}

class NavItem {
  constructor(name, ref) {
    this.name = name;
    this.ref = ref;
  }
}

export default SideNavController;
