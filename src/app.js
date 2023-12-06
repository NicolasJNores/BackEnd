import express from "express";
import ProductManager from "./product-manager.js";

const productManager = new ProductManager([
  {
    id: 1,
    code: "12345",
    name: "Producto 1",
    price: 100
  },
  {
    id: 2,
    code: "67890",
    name: "Producto 2",
    price: 200
  }
]);

const app = express();

// Ruta /products

app.get("/products", async (req, res) => {
  // Obtener los productos
  const products = await productManager.getProducts();

  // Devolver los productos
  res.json(products);
});

// Ruta /products/:pid

app.get("/products/:pid", async (req, res) => {
  // Obtener el id del producto
  const pid = parseInt(req.params.pid);

  // Obtener el producto
  const product = await productManager.getProductById(pid);

  // Devolver el producto
  if (product === undefined) {
    res.status(404).json({ message: "Producto no encontrado" });
  } else {
    res.json(product);
  }
});

// Escuchar peticiones

app.listen(8080, () => {
  console.log("Servidor funcionando en puerto 8080");
});
