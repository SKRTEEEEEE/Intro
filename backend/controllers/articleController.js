const dataBlog = require('../data/dataBlog');

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
};
