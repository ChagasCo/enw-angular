import Product from '../models/product';

class ProductsService {
  constructor($http, API, $q) {
    'ngInject';

    this.$http = $http;
    this.baseUrl = API.url;
    this.$q = $q;

    this.getProducts = this.getProducts;
    this.getProduct = this.getProduct;
  }

  getProducts() {
    // console.log(this.baseUrl);
    return this.$http
      .get(this.baseUrl + '/products')
      .success((products) => {
        return this.$q.resolve(products);
      });
  }

  getProduct(productId) {
    return this.$http
      .get(this.baseUrl + '/products/' + productId)
      .success((product) => {
        return this.$q.resolve(product);
      });
  }

}




export default ProductsService;
