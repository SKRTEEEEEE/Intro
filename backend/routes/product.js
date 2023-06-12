const express = require('express');

const { addProduct } = require('../controllers/productController');
const api = express.Router();

// function addProduct(req, res) {
//   res.status(201).send({ success: true });
// }

api.post('/products', addProduct);

module.exports = api;
