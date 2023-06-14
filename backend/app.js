const express = require('express');
//MIDDLEWARE Y RUTAS(ENDPOINTS)
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

const addProduct = require('./routes/product');
const addArticle = require('./routes/article');
const profileRouter = require('./routes/profile');
const logoutRouter = require('./routes/logout');
const signinRouter = require('./routes/signin');
const loginRouter = require('./routes/login');

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
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api', uploadMiddleware.single('file'));
app.use('/v1', addProduct);
app.use('/api', addArticle);
app.use('/', profileRouter);
app.use('/', logoutRouter);
app.use('/', signinRouter);
app.use('/', loginRouter);

module.exports = app;
