const express = require('express');
//MIDDLEWARE Y RUTAS(ENDPOINTS)
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const addProduct = require('./routes/product');
const addArticle = require('./routes/article');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());

app.use('/api', uploadMiddleware.single('file'));
app.use('/v1', addProduct);
app.use('/api', addArticle);

module.exports = app;
