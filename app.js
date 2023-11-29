import ProductManager from "./product-manager.js";

const productManager = new ProductManager("./products.json");

// Obtener los productos
const products = productManager.getProducts();

// Validar que el arreglo esté vacío
if (products.length !== 0) {
  throw new Error("El arreglo de productos no debe estar vacío");
}

// Agregar un producto
productManager.addProduct({
  title: "MacBook Pro",
  description: "La mejor computadora portátil del mercado",
  price: 2000,
  thumbnail: "/images/macbook-pro.jpg",
  code: "MACBOOK-PRO",
  stock: 10,
});

// Obtener los productos nuevamente
products = productManager.getProducts();

// Validar que el producto esté agregado
if (products.find((p) => p.code === "MACBOOK-PRO") === undefined) {
  throw new Error("El producto no se agregó correctamente");
}

// Agregar el mismo producto nuevamente
productManager.addProduct({
  title: "MacBook Pro",
  description: "La mejor computadora portátil del mercado",
  price: 2000,
  thumbnail: "/images/macbook-pro.jpg",
  code: "MACBOOK-PRO",
  stock: 10,
});

// Validar que se arroje un error
try {
  productManager.addProduct({
    title: "iPhone 14",
    description: "El nuevo teléfono inteligente de Apple",
    price: 1000,
    thumbnail: "/images/iphone-14.jpg",
    code: "MACBOOK-PRO",
    stock: 5,
  });
} catch (error) {
  if (error.message !== "El código del producto ya existe") {
    throw new Error("El error no es el esperado");
  }
}

// Obtener un producto por id
const product = productManager.getProductById(1);

// Validar que el producto se encuentre
if (product === undefined) {
  throw new Error("El producto no se encontró");
}

// Imprimir los productos
console.log(products);
