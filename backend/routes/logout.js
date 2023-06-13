const express = require('express');
const { doLogout } = require('../controllers/logoutController');

const api = express.Router();

api.post('/logout', doLogout);

module.exports = api;
