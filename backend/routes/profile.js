const express = require('express');
const { getProfile } = require('../controllers/profileController.js');
const api = express.Router();

api.get('/profile', getProfile);

module.exports = api;
