import fs from "fs";

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(product) {
    // Validar que no se repita el código
    if (this.products.some((p) => p.code === product.code)) {
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

    // Guardar los productos en el archivo
    fs.writeFileSync(this.path, JSON.stringify(this.products), { mode: "w" });
  }

  getProducts() {
    // Leer los productos del archivo
    const products = JSON.parse(fs.readFileSync(this.path));

    // Devolver los productos
    return products;
  }

  getProductById(id) {
    // Leer los productos del archivo
    const products = JSON.parse(fs.readFileSync(this.path));

    // Buscar el producto con el id especificado
    const product = products.find((p) => p.id === id);

    // Devolver el producto
    return product;
  }

  updateProduct(id, field, value) {
    // Leer los productos del archivo
    const products = JSON.parse(fs.readFileSync(this.path));

    // Buscar el producto con el id especificado
    const product = products.find((p) => p.id === id);

    // Actualizar el campo especificado
    product[field] = value;

    // Guardar los productos en el archivo
    fs.writeFileSync(this.path, JSON.stringify(products), { mode: "w" });
  }

  deleteProduct(id) {
    // Leer los productos del archivo
    const products = JSON.parse(fs.readFileSync(this.path));

    // Eliminar el producto
    products = products.filter((p) => p.id !== id);

    // Guardar los productos en el archivo
    fs.writeFileSync(this.path, JSON.stringify(products), { mode: "w" });
  }
}
