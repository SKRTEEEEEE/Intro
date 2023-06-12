const express = require('express');
const {
  addArticleFromData,
  findArticleById,
} = require('../controllers/articleController');
const api = express.Router();

// function findArticleById (req,res){
//     const article = dataBlog.articles.find(
//         (x) => x.id.toString() === req.params.id
//       );
//       if (article) {
//         res.send(article);
//       } else {
//         res.status(404).send({ message: 'Product Not Found' });
//       }
// }

// app.get('/api/articles/id/:id', (req, res) => {
//     const article = dataBlog.articles.find(
//       (x) => x.id.toString() === req.params.id
//     );
//     if (article) {
//       res.send(article);
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   });

api.get('/articles/id/:id', findArticleById);
api.get('/articles', addArticleFromData);

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
