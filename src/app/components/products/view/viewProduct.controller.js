class ViewProductController {
  constructor(ProductsService, $sce, $stateParams, $state, taOptions, $mdDialog, $mdMedia, EmailService, $scope) {
    'ngInject';

    taOptions.toolbar = [
      ['h1', 'h2', 'h3', 'p', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'indent', 'outdent', 'clear', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount'],
      // ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      // ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];

    var id = $stateParams.id;

    this.mdDialog = $mdDialog;
    this.mdMedia = $mdMedia;
    this.EmailService = EmailService;

    this.scope = $scope;
    this.main = $scope.$parent.$parent.$parent.main;
    this.ProductsService = ProductsService;
    this.state = $state;

    this.editProductValidating = false;

    this.loading = true;
    ProductsService.getProduct(id)
      .then((product) => {
        this.product = product;
        this.loading = false;
      });

    this.trustAsHtml = $sce.trustAsHtml;
  }

  filePicked(event) {
    this.product.imageUrl = this.value;
  }
  deleteProduct(product, event) {
    var confirm = this.mdDialog.confirm()
       .title('Are you sure?')
       .textContent('This action will permanently delete the product')
       .ariaLabel('Delete Product')
       .targetEvent(event)
       .ok('Delete')
       .cancel('Cancel');

    this.mdDialog
     .show(confirm)
     .then(() => {
       this.ProductsService
        .delete(product.id)
        .then((response) => {
          this.main.broadcastToast("Product was deleted!");
          this.state.go("^");
        });
     });
  }

  editProductSubmit() {
    if (this.scope.editProductForm.$valid) {
      this.editProductValidating = true;

      this.ProductsService
        .update(this.product)
        .then((response) => {
          if (response.errors) {
            // Show Error
            this.main.broadcastToast("Failed to update the product.");
          } else {
            // window.location.reload();
            this.main.broadcastToast("Product Updated!");

            this.product = response.product;
          }
          this.editProductValidating = false;
          this.scope.editProductForm.$setPristine();
        });
    }
  }

  orderEmail(ev) {
    var useFullScreen =  this.mdMedia('sm') || this.mdMedia('xs');
    this.mdDialog.show({
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true,
      locals: {
        parent: this,
        cancel: this.cancel,
        orderEmailSubmit: this.orderEmailSubmit,
        displaySuccess: false,
        displayError: false
      },
      template: `
      <md-dialog class="order-email-cmp" ng-cloak>
        <md-toolbar>
          <div class="md-toolbar-tools">
            <h2>Order Product</h2>
            <span flex></span>
            <md-button class="md-icon-button" ng-click="vm.cancel()">
              <md-icon aria-label="Close dialog">close</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <form name="orderEmailForm" layout="column"  ng-submit="orderEmailForm.$valid && vm.orderEmailSubmit(vm.emailBody)" novalidate ng-hide="vm.displaySuccess || vm.displayError">
          <md-dialog-content class="md-padding" layout="column" ng-hide="vm.orderEmailFormValidating">

            <!-- Name -->
            <md-input-container flex md-is-error="orderEmailForm.name.$invalid && (orderEmailForm.$submitted || orderEmailForm.name.$dirty)">
              <label>Name</label>
              <input name="name" type="text" ng-model="vm.emailBody.name" ng-required="true">
              <div ng-messages="orderEmailForm.name.$error" ng-if="orderEmailForm.$submitted || orderEmailForm.name.$touched">
                <div ng-message="required">You must enter your name</div>
              </div>
            </md-input-container>

            <!-- Email -->
            <md-input-container flex md-is-error="orderEmailForm.email.$invalid && (orderEmailForm.$submitted || orderEmailForm.email.$dirty)">
              <label>Email</label>
              <input name="email" type="text" ng-model="vm.emailBody.email" ng-required="true">
              <div ng-messages="orderEmailForm.email.$error" ng-if="orderEmailForm.$submitted || orderEmailForm.email.$touched">
                <div ng-message="required">You must enter your email</div>
              </div>
            </md-input-container>

            <!-- Quantity -->
            <md-input-container flex md-is-error="orderEmailForm.quantity.$invalid && (orderEmailForm.$submitted || orderEmailForm.quantity.$dirty)">
              <label>Quantity</label>
              <input name="quantity" type="number" ng-model="vm.emailBody.quantity" ng-required="true">
              <div ng-messages="orderEmailForm.quantity.$error" ng-if="orderEmailForm.$submitted || orderEmailForm.quantity.$touched">
                <div ng-message="required">You must enter a quantity</div>
              </div>
            </md-input-container>

            <!-- Message -->
            <md-input-container flex md-is-error="orderEmailForm.message.$invalid && (orderEmailForm.$submitted || orderEmailForm.message.$dirty)">
              <label>Message (Optional)</label>
              <textarea name="message" type="text" ng-model="vm.emailBody.message" rows="10"></textarea>
            </md-input-container>
          </md-dialog-content>

          <md-dialog-content class="form-validating" ng-if="vm.orderEmailFormValidating" layout="column" layout-align="center center">
            <md-progress-circular md-mode="indeterminate"></md-progress-circular>
          </md-dialog-content>

          <md-dialog-actions ng-hide="vm.orderEmailFormValidating">
            <md-button ng-click="vm.cancel()">Cancel</md-button>
            <span flex></span>
            <md-button class="md-primary" type="submit" ng-disabled="vm.orderEmailFormValidating">Send</md-button>
          </md-dialog-actions>

        </form>

        <span  ng-if="vm.displaySuccess && !vm.displayError">
          <md-dialog-content class="success-content">
            <h1>Success!</h1>
            <h2>Thank you. </h2>
            <p>
              Your request is now in queue and will be reviewed as soon as possible.
            </p>
          </md-dialog-content>
          <md-dialog-actions>
            <span flex></span>
            <md-button ng-click="vm.cancel()">Close</md-button>
          </md-dialog-actions>
        </span>

        <!-- Error -->
        <span ng-if="vm.displayError && !vm.displaySuccess">
          <md-dialog-content class="error-content"layout="column">
            <h1>Error</h1>
            <p>
              Unfortunately your request failed. Please try again.
            </p>
            <p>
              Alternatively, you can contact Heather at <a href="mailto:heather@essentialnordicwalking.com.au">heather@essentialnordicwalking.com.au</a>
            </p>
          </md-dialog-content>
          <md-dialog-actions>
            <span flex></span>
            <md-button ng-click="vm.cancel()">Close</md-button>
          </md-dialog-actions>
        </span>
      </md-dialog>

      `,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
  }

  orderCall(ev) {
    var useFullScreen =  this.mdMedia('sm') || this.mdMedia('xs');
    this.mdDialog.show({
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true,
      locals: {
        parent: this,
        cancel: this.cancel,
        heatherContact: this.main.heatherContact
      },
      template: `
      <md-dialog class="order-call-cmp">
        <md-toolbar>
          <div class="md-toolbar-tools">
            <h2>Order Product</h2>
            <span flex></span>
            <md-button class="md-icon-button" ng-click="vm.cancel()">
              <md-icon aria-label="Close dialog">close</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-dialog-content class="md-padding" layout="column" layout-align="start center">
          <h1>Call Heather</h1>
          <h2>{{vm.heatherContact}}</h2>
          <br>
          <p>

          </p>
        </md-dialog-content>
      </md-dialog>

      `,
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
  }

  cancel() {
    this.parent.mdDialog.hide();
  }

  orderEmailSubmit(emailBody) {
    var notes = "Quantity: " + emailBody.quantity + ", Message: " + emailBody.message;
    this.orderEmailFormValidating = true;
    this.parent.EmailService.sendEmail(emailBody.name, emailBody.email, '', notes)
      .then((response) => {
        this.orderEmailFormValidating = false;
        if (response.error) {
          this.displayError = true;
          this.displaySuccess = false;
        } else {
          this.displaySuccess = true;
          this.displayError = false;
        }
      });
  }
}

export default ViewProductController;
