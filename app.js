require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Accueil");
});

app.get('/produits', (req, res) => {
  res.send("Catalogue produit");
});

app.get('/produits/:id(\\d+)', (req, res) => {
  console.log(req.query);
  res.send("Catalogue de produits");
});

app.get('/api/*', (req, res) => {
  res.send("API...");
});

app.listen(port, () => {
  console.log("Serveur démaarré sur http://localhost:" + port);
});