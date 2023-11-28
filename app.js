import ProductManager from "./product-manager.js";

const productManager = new ProductManager();

// Obtener los productos
const products = productManager.getProducts();

// Validar que el arreglo esté vacío
console.log("El arreglo de productos está vacío:", products.length === 0);

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
console.log("El producto se agregó correctamente:", products.find((p) => p.code === "MACBOOK-PRO") !== undefined);

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
  console.log("Se arrojó el error esperado:", error.message === "El código del producto ya existe");
}

// Obtener un producto por id
const product = productManager.getProductById(1);

// Validar que el producto se encuentre
console.log("El producto se encontró:", product !== undefined);

// Imprimir los productos
console.log(products);
