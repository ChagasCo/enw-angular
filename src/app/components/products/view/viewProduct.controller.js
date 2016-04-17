class ViewProductController {
  constructor(ProductsService, $sce, $stateParams, taOptions, $mdDialog, $mdMedia, EmailService, $scope) {
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

    this.main = $scope.$parent.$parent.$parent.main;

    this.loading = true;
    ProductsService.getProduct(id)
      .then((product) => {
        this.product = product;
        this.loading = false;
      });

    this.trustAsHtml = $sce.trustAsHtml;
  }

  filePicked(event) {
    console.log(this.value);

    this.product.imageUrl = this.value;
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
      templateUrl: '/app/components/products/view/dialogs/orderEmail.tmpl.html',
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
      templateUrl: '/app/components/products/view/dialogs/orderCall.tmpl.html',
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
