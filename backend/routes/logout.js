const express = require('express');
const { doLogout } = require('../controllers/logoutController');

const api = express.Router();

// app.post('/logout');

api.post('/', doLogout);

module.exports = api;
