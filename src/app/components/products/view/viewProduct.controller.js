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
        if (product.error) {
          this.state.go("^");
          return;
        }
        this.product = product;
        this.loading = false;
      });

    this.trustAsHtml = $sce.trustAsHtml;
  }

  uploadImage() {
    var this_ = this;
    uploadcare.openDialog().done(function(file) {
      file.promise().done(function(fileInfo){
        this_.product.imageUrl = fileInfo.cdnUrl;
        this_.scope.$apply();
      });
    });
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
      templateUrl: 'app/components/products/view/dialogs/orderCall.tmpl.html',
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
      templateUrl: 'app/components/products/view/dialogs/orderEmail.tmpl.html',
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
