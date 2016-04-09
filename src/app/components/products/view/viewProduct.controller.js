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
}

export default ViewProductController;
