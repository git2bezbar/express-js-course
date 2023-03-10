require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');

const globalRouter = require('./routes/global');
const shopRouter = require('./routes/shop');


app.use('/', globalRouter)
app.use('/products', shopRouter)

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log("Serveur démaarré sur http://localhost:" + port);
});