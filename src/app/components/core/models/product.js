class Product {
  constructor(id, name, brand, description, price, thumbnail) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.description = description;
    this.price = price;
    this.thumbnail  = thumbnail;
  }

  order() {
    // Send email to heather
    console.log("Ordering products: " + this.name);
  }
}


export default Product;
