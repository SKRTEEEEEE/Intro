const express = require('express');
//MIDDLEWARE Y RUTAS(ENDPOINTS)
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', productRoutes); //Llamamos a la version de ruta y la funcion que ejecuta el endpoint o api

module.exports = app;
