const dataBlog = require('../data/dataBlog');

function addArticleFromData(req, res) {
  res.send(dataBlog.articles);
}

module.exports = {
  addArticleFromData,
};
