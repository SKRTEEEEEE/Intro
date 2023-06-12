const express = require('express');
//MIDDLEWARE Y RUTAS(ENDPOINTS)
const bodyParser = require('body-parser');
const addProduct = require('./routes/product');
const addArticle = require('./routes/article');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/v1', addProduct); //Llamamos a la version de ruta y la funcion que ejecuta el endpoint o api
app.use('/api', addArticle);

module.exports = app;
