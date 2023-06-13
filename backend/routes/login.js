const express = require('express');
const { doLogin } = require('../controllers/loginController');

const api = express.Router();

api.post('/', doLogin);

module.exports = api;
