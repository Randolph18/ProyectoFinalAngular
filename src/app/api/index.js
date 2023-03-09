const express = require('express');
const app = express();
const port = 3000;
products = require('../api/product/products.js');
const bodyParser = require('body-parser');
jsonParser = bodyParser.json();
let cors = require('cors');

respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};

//Todos los destinos
app.use(cors({
  origin : '*',
}))

//
app.use(bodyParser.json());

//inicio
app.get('/', (req, res) => {
  res.send("API de productos de tienda Online");
});

// Obtener todos los productos
app.get("/products", function(req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: products,
}
  res.send(respuesta);
});

// Obtener un producto por ID
app.get("/product/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("El producto con el ID proporcionado no se encontró");
  res.send(product);
});

// Agregar un nuevo producto
app.post("/product", (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  };
  products.push(product);
  res.send(product);
});

// Actualizar un producto por ID
app.put("/product/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("El producto con el ID proporcionado no se encontró");

  product.name = req.body.name;
  product.price = req.body.price;
  product.image = req.body.image;
  res.send(product);
});

// Eliminar un producto por ID
app.delete("/product/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).send("El producto con el ID proporcionado no se encontró");

  const index = products.indexOf(product);
  products.splice(index, 1);
  res.send(product);
});

// Puerto 3000
app.listen(port, () => {
  console.log('API listening at ', port);
});
