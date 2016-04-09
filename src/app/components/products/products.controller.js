class ProductsController {
  constructor(ProductsService) {
    'ngInject';

    ProductsService.getProducts()
      .success((products) => {
        this.products = products;
      });
  }

}

export default ProductsController;
