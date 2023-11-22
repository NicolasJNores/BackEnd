import ProductManager from "./product-manager.js";

const productManager = new ProductManager();

productManager.addProduct({
  title: "MacBook Pro",
  description: "La mejor computadora portátil del mercado",
  price: 2000,
  thumbnail: "/images/macbook-pro.jpg",
  code: "MACBOOK-PRO",
  stock: 10,
});

productManager.addProduct({
  title: "iPhone 14",
  description: "El nuevo teléfono inteligente de Apple",
  price: 1000,
  thumbnail: "/images/iphone-14.jpg",
  code: "IPHONE-14",
  stock: 5,
});

const products = productManager.getProducts();

console.log(products);