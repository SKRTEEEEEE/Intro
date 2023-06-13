const express = require('express');
const { getProfile } = require('../controllers/profileController.js');
const api = express.Router();

api.get('/', getProfile);

module.exports = api;
