const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ArticleSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: String,
  },
  {
    timestamps: true,
  }
);

const ArticleModel = model('Article', ArticleSchema);

module.exports = ArticleModel;
