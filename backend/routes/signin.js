const express = require('express');
const { doSignin } = require('../controllers/signinController');

const api = express.Router();

api.post('/signin', doSignin);

module.exports = api;
