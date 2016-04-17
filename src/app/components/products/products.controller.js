class ProductsController {

  constructor(ProductsService, $mdDialog, $mdMedia, taOptions, $state) {
    'ngInject';

    this.mdDialog = $mdDialog;
    this.mdMedia = $mdMedia;
    this.loading = true;
    this.newProductFormValidating = false;
    this.state = $state;

    taOptions.toolbar = [
      ['h1', 'h2', 'h3', 'p', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'indent', 'outdent', 'clear', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount'],
      // ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      // ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];
    this.ProductsService = ProductsService;

    ProductsService.getProducts()
      .success((products) => {
        this.products = products;
        this.loading = false;
      });
  }

  newProduct(ev) {
    var useFullScreen =  this.mdMedia('sm') || this.mdMedia('xs');

    this.mdDialog.show({
      controller: angular.noop,
      controllerAs: 'vm',
      bindToController: true,
      locals: {
        parent: this,
        cancel: this.cancel,
        newProductSubmit: this.newProductSubmit,
        showImageUpload: false,
        uploadImage: this.uploadImage,
        product: {
          imageUrl: '',
        }
      },
      templateUrl: '/app/components/products/newProduct/newProduct.html',
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    })
    .then(() => {

    });
  }

  // New Product Dialog Functions
  cancel() {
    this.parent.mdDialog.hide();
  }

  uploadImage() {
    var _this = this;
    // this.product.imageUrl = "/assets/images/loading.gif";
    filepicker.pick({
      mimetype: 'image/jpeg', // Images only
      maxSize: 1024 * 1024 * 10, // 5mb
      imageMax: [2500, 2500], // 1500x1500
      services: ['*'] // All available services
    }, (blob) => {
      _this.product.imageUrl = blob.url;

      _this.$scope.$apply();
    });
  }

  newProductSubmit(product) {
    this.newProductFormValidating = true;

    // console.log(this);

    this.parent.ProductsService.newProduct(product)
      .then((response) => {
        if (response.error === "token_not_provided") {
          this.parent.state.go("login");
          this.parent.mdDialog.hide();
          return;
        }

        this.parent.mdDialog.hide();
        window.location.reload();
      })
  }

}

export default ProductsController;
