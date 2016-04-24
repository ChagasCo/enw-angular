class ProductsController {

  constructor(ProductsService, $mdDialog, $mdMedia, taOptions, $state, $scope) {
    'ngInject';

    this.mdDialog = $mdDialog;
    this.mdMedia = $mdMedia;
    this.loading = true;
    this.newProductFormValidating = false;
    this.state = $state;
    this.scope = $scope;

    taOptions.toolbar = [
      ['h1', 'h2', 'h3', 'p', 'bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'indent', 'outdent', 'clear', 'html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount'],
      // ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      // ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
    ];
    this.ProductsService = ProductsService;

    ProductsService.getProducts()
      .then((products) => {
        this.products = products;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
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
          imageUrl: ''
        }
      },
      templateUrl: 'app/components/products/newProduct/newProduct.html',
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
    var this_ = this;
    uploadcare.openDialog().done(function(file) {
      file.promise().done(function(fileInfo){
        this_.product.imageUrl = fileInfo.cdnUrl;
        this_.scope.$apply();
      });
    });

    // var _this = this;
    // if (filepicker) {
    //   // this.product.imageUrl = "/assets/images/loading.gif";
    //   filepicker.pick({
    //     mimetype: 'image/jpeg', // Images only
    //     maxSize: 1024 * 1024 * 10, // 5mb
    //     imageMax: [2500, 2500], // 1500x1500
    //     services: ['*'] // All available services
    //   }, (blob) => {
    //     _this.product.imageUrl = blob.url;
    //
    //     _this.$scope.$apply();
    //   });
    // } else {
    //   console.error("FilePicker service unavailable.");
    // }
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
      });
  }

}

export default ProductsController;

//
// `
// <md-dialog class="new-product-cmp" aria-label="New Product" ng-cloak>
//   <md-toolbar>
//     <div class="md-toolbar-tools">
//       <h2>New Product</h2>
//       <span flex></span>
//       <md-button class="md-icon-button" ng-click="vm.cancel()">
//         <md-icon aria-label="Close dialog">close</md-icon>
//       </md-button>
//     </div>
//   </md-toolbar>
//   <form name="newProductForm" layout="column"  ng-submit="newProductForm.$valid && vm.newProductSubmit(vm.product)" novalidate>
//     <md-dialog-content class="md-padding" ng-hide="vm.showImageUpload" layout="column">
//       <!-- Name -->
//       <md-input-container flex md-is-error="newProductForm.name.$invalid && (newProductForm.$submitted || newProductForm.name.$dirty)">
//         <label>Name</label>
//         <input name="name" type="text" ng-model="vm.product.name" ng-required="true">
//         <div ng-messages="newProductForm.name.$error" ng-if="newProductForm.$submitted || newProductForm.name.$touched">
//           <div ng-message="required">You must enter a name</div>
//         </div>
//       </md-input-container>
//
//       <!-- Brand -->
//       <md-input-container flex md-is-error="newProductForm.brand.$invalid && (newProductForm.$submitted || newProductForm.brand.$dirty)">
//         <label>Brand</label>
//         <input name="brand" type="text" ng-model="vm.product.brand" ng-required="true">
//         <div ng-messages="newProductForm.brand.$error" ng-if="newProductForm.$submitted || newProductForm.brand.$touched">
//           <div ng-message="required">You mus1t enter a brand name</div>
//         </div>
//       </md-input-container>
//
//       <!-- Price -->
//       <md-input-container flex md-is-error="newProductForm.price.$invalid && (newProductForm.$submitted || newProductForm.price.$dirty)">
//         <label>Price</label>
//         <input name="price" type="number" step="0.05" ng-model="vm.product.price" ng-required="true">
//         <div ng-messages="newProductForm.price.$error" ng-if="newProductForm.$submitted || newProductForm.price.$touched">
//           <div ng-message="required">You must enter a price</div>
//         </div>
//       </md-input-container>
//       <!-- Description -->
//       <md-input-container flex md-is-error="newProductForm.description.$invalid && (newProductForm.$submitted || newProductForm.description.$dirty)">
//         <label style="color: #757575">Description</label>
//         <br><br>
//         <text-angular ng-model="vm.product.description"></text-angular>
//         <!-- <textarea name="description" ng-model="vm.product.description" ng-required="true"></textarea> -->
//         <div ng-messages="newProductForm.description.$error" ng-if="newProductForm.$submitted || newProductForm.description.$touched">
//           <div ng-message="required">You must enter a description</div>
//         </div>
//       </md-input-container>
//     </md-dialog-content>
//
//     <md-dialog-content class="image-upload md-padding" ng-show="vm.showImageUpload" layout="column">
//       Image Upload
//       <md-content layout="column">
//         <md-content layout="row" layout-align="start center">
//           <md-button class="upload-btn" ng-click="vm.uploadImage()">Upload</md-button>
//           <span flex><a href="{{vm.product.imageUrl}}" target="_blank">{{vm.product.imageUrl}}</a></span>
//         </md-content>
//         <img ng-src="{{vm.product.imageUrl}}" alt="">
//       </md-content>
//     </md-dialog-content>
//
//     <md-dialog-actions layout="row" style="border-top: 2px solid #dcdcdc; background-color: #efefef;">
//       <md-button ng-click="vm.cancel()">
//        Discard
//       </md-button>
//       <span flex></span>
//       <md-button ng-if="vm.showImageUpload" ng-click="vm.showImageUpload = false;">
//         Back
//       </md-button>
//       <md-button ng-if="!vm.showImageUpload" ng-click="vm.showImageUpload = true;">
//         Next
//       </md-button>
//       <md-button class="md-raised md-primary" ng-if="vm.showImageUpload" type="submit" ng-disabled="vm.newProductFormValidating" style="margin-right:20px;">
//         Save
//       </md-button>
//     </md-dialog-actions>
//   </form>
//
// </md-dialog>
//
// `
