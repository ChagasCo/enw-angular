class ViewProductController {
  constructor(ProductsService, $sce, $stateParams) {
    'ngInject';

    var id = $stateParams.id;

    ProductsService.getProduct(id)
      .success((product) => {
        this.product = product;
      });

    this.trustAsHtml = $sce.trustAsHtml;
  }

  filePicked(event) {
    console.log(this.value);

    this.product.imageUrl = this.value;
  }
}

export default ViewProductController;
