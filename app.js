require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');

const globalRouter = require('./routes/global');
const shopRouter = require('./routes/shop');

const checkAuthorized = function(req, res, next) {
  console.log("Je check si le user est aurotisé, Malafack");
  next();
}

app.use('/admin', checkAuthorized);

app.use('/', globalRouter)
app.use('/products', shopRouter)

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log("Serveur démaarré sur http://localhost:" + port);
});