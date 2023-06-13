const dataBlog = require('../data/dataBlog');
const fs = require('fs');
const Article = require('../models/Article');

async function postArticle(req, res) {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path + '.' + ext;
  fs.renameSync(path, newPath);
  const { title, content, summary } = req.body;
  const articleDoc = await Article.create({
    title,
    summary,
    content,
    cover: newPath,
  });

  res.json(articleDoc);
}

function addArticleFromData(req, res) {
  res.send(dataBlog.articles);
}
function findArticleById(req, res) {
  const article = dataBlog.articles.find(
    (x) => x.id.toString() === req.params.id
  );
  if (article) {
    res.send(article);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
}

module.exports = {
  addArticleFromData,
  findArticleById,
  postArticle,
};
