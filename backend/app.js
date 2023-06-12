const express = require('express');
//MIDDLEWARE Y ENDPOINTS
const productRoutes = require('./routes/product');

const app = express();

app.use('/v1', productRoutes); //Llamamos a la version de ruta y la funcion que ejecuta el endpoint o api

module.exports = app;
