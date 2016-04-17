import Product from '../models/product';

class ProductsService {
  constructor($http, API, $q, $auth, $state) {
    'ngInject';

    this.http = $http;
    this.baseUrl = API.url;
    this.q = $q;
    this.auth = $auth;
    this.state = $state;

    this.getProducts = this.getProducts;
    this.getProduct = this.getProduct;
  }

  getProducts() {
    // console.log(this.baseUrl);
    return this.http
      .get(this.baseUrl + '/products')
      .success((products) => {
        return this.q.resolve(products);
      });
  }

  getProduct(productId) {
    return this.http
      .get(this.baseUrl + '/products/' + productId)
      .success((product) => {
        return this.q.resolve(product);
      });
  }

  newProduct(product) {
    return this.http
      .post(this.baseUrl + "/products", product)
      .then((response) => {
        return response.data;
      })
      .catch((response) => {
        return response.data;
      });
  }

}




export default ProductsService;
