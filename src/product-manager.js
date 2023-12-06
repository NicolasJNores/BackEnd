import fs from "fs";

class ProductManager {
  constructor(products) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find((p) => p.id === id);
  }

  addProduct(product) {
    this.products.push(product);
  }

  updateProduct(id, field, value) {
    for (const product of this.products) {
      if (product.id === id) {
        product[field] = value;
        break;
      }
    }
  }

  deleteProduct(id) {
    this.products = this.products.filter((p) => p.id !== id);
  }
}

export default ProductManager;