const dataBlog = require('../data/dataBlog');
const fs = require('fs');
const Article = require('../models/Article');
const ArticleModel = require('../models/Article');
const jwt = require('jsonwebtoken');
const { secret } = require('../config.js');

async function postArticle(req, res) {
  //Revisar uso de imagen, para subir imagen
  const { originalname, path: filePath } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = filePath + '.' + ext;
  const newPathWithForwardSlashes = newPath.replace(/\\/g, '/');
  fs.renameSync(filePath, newPathWithForwardSlashes);

  const { token } = req.cookies;
  jwt.verify(token, secret.jwt, {}, async (err, info) => {
    if (err) throw err;
    const { title, content, summary } = req.body;
    const articleDoc = await Article.create({
      title,
      summary,
      content,
      cover: newPathWithForwardSlashes,
      author: info.username,
    });
    res.json(articleDoc);
  });
}

async function getArticles(req, res) {
  try {
    const articlesFromDataBlog = dataBlog.articles;
    const articlesFromDB = await ArticleModel.find().populate('author', [
      'username',
    ]);
    const allArticles = [...articlesFromDataBlog, ...articlesFromDB];
    res.json(allArticles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los artículos.' });
  }
}
// function findArticleById(req, res) {
//   const article = dataBlog.articles.find(
//     (x) => x.id.toString() === req.params.id
//   );
//   if (article) {
//     res.send(article);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// }
async function findArticleById(req, res) {
  const articleId = req.params._id;

  try {
    const article = await ArticleModel.findById(articleId);

    if (article) {
      res.json(article);
    } else {
      res.status(404).json({ message: 'Article Not Found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el artículo.' });
  }
}

module.exports = {
  getArticles,
  findArticleById,
  postArticle,
};
