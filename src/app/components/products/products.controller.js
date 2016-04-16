class ProductsController {
  constructor(ProductsService) {
    'ngInject';


    this.loading = true;
    ProductsService.getProducts()
      .success((products) => {
        this.products = products;
        this.loading = false;
      });
  }

}

export default ProductsController;
