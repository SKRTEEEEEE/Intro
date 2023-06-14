const express = require('express');
const {
  getArticles,
  findArticleById,
  postArticle,
} = require('../controllers/articleController');
const api = express.Router();

api.post('/articles', postArticle);
api.get('/articles/id/:id', findArticleById);
api.get('/articles', getArticles);

//FUNCIONES HTTP PARA PASAR/CREAR

// app.post('/api/articles', (req, res) => {
//     let articuloNuevo = req.body;
//     dataBlog.articles.push(articuloNuevo);
//     res.send(dataBlog.articles);
//     console.log(articuloNuevo);
//   });

//   app.delete('/api/articles/id/:id', (req, res) => {
//     const id = req.params.id;
//     const indice = dataBlog.articles.findIndex((curso) => curso.id == id);

//     if (indice >= 0) {
//       dataBlog.articles.splice(indice, 1);
//     }
//     res.send(JSON.stringify(dataBlog.articles));
//     console.log('deleted with :D');
//   });

module.exports = api;
