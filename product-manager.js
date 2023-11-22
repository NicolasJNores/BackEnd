class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Validar que no se repita el código
      if (this.products.find((p) => p.code === product.code)) {
        throw new Error("El código del producto ya existe");
      }
  
      // Validar que todos los campos sean obligatorios
      for (const key in product) {
        if (product[key] === undefined) {
          throw new Error(`El campo ${key} es obligatorio`);
        }
      }
  
      // Crear el id autoincrementable
      product.id = this.products.length + 1;
  
      // Agregar el producto al arreglo
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        console.error("No se encontró el producto con el id", id);
      }
  
      return product;
    }
  }