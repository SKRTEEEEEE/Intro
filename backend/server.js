require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const dataBlog = require('./data/dataBlog.js');
const bodyParser = require('body-parser');
const UserModel = require('./models/User.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { appConfig, db } = require(`./config.js`);

const connectDb = require('./db/mongodb.js');

const secret = 'asdfe45we45w345wegw345werjktjwertkj';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongoose
//   .connect(
//     'mongodb+srv://adan:h8DuTiZyr2ZAgXeL@cluster0.7ljcxih.mongodb.net/?retryWrites=true&w=majority'
//   )
//   .then(() => {
//     console.log('connected to db');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// SIGN & LOG IN
app.post('/signin', async (req, res) => {
  const { username, password, email } = req.body;
  console.log('Received data:', { username, password, email });

  try {
    const userDoc = await UserModel.create({ username, email, password });
    res.json(userDoc);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({ email });
  const passOk = password === userDoc.password;

  if (passOk) {
    jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) {
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.cookie('token', token, { httpOnly: true }).json({
          id: userDoc._id,
          email: userDoc.email,
          username: userDoc.username,
        });
      }
    });
    console.log(`Login ${userDoc.username} with email ${userDoc.email}`);
  } else {
    res.status(400).json('wrong credentials');
  }
});

// PROFILE
app.get('/profile', (req, res) => {
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, secret);
    res.json(decoded);
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});
app.post('/logout', (req, res) => {
  res.clearCookie('token').json('ok');
});

// ARTICLES
app.get('/api/articles', (req, res) => {
  res.send(dataBlog.articles);
});

app.get('/api/articles/id/:id', (req, res) => {
  const article = dataBlog.articles.find(
    (x) => x.id.toString() === req.params.id
  );
  if (article) {
    res.send(article);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.post('/api/articles', (req, res) => {
  let articuloNuevo = req.body;
  dataBlog.articles.push(articuloNuevo);
  res.send(dataBlog.articles);
  console.log(articuloNuevo);
});

app.delete('/api/articles/id/:id', (req, res) => {
  const id = req.params.id;
  const indice = dataBlog.articles.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    dataBlog.articles.splice(indice, 1);
  }
  res.send(JSON.stringify(dataBlog.articles));
  console.log('deleted with :D');
});

// PORT ACCESS Y MONGODB CONNECTION
// const port = process.env.APP_PORT || 5000;

async function initApp(appConfig, db) {
  try {
    await connectDb(db);
    app.listen(appConfig.port, () => {
      console.log(`Server running at http://localhost:${appConfig.port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}
initApp(appConfig, db);
