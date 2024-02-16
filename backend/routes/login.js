const express = require('express');
const { doLogin } = require('../controllers/loginController');

const api = express.Router();

api.post('/login', doLogin);

module.exports = api;
