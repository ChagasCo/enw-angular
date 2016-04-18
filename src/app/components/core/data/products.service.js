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
      .then((response) => {
        return response.data;
      });
  }

  getProduct(productId) {
    return this.http
      .get(this.baseUrl + '/products/' + productId)
      .then((response) => {
        return response.data;
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

  update(product) {
    return this.http
      .post(this.baseUrl + "/products/edit/" + product.id, product)
      .then((response) => {
        return response.data;
      });
  }

  delete(id) {
    return this.http
      .post(this.baseUrl + "/products/delete/" + id)
      .then((response) => {
        return response.data;
      });
  }

}




export default ProductsService;
