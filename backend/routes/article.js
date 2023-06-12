const express = require('express');
const { addArticleFromData } = require('../controllers/articleController');
// const dataBlog = require('../data/dataBlog');
const api = express.Router();
// app.get('/api/articles', (req, res) => {
//     res.send(dataBlog.articles);
//   });

// function addArticleFromData(req, res) {
//   res.send(dataBlog.articles);
// }

api.get('/articles', addArticleFromData);

module.exports = api;
