import express from 'express';
import dataBlog from './data/dataBlog.js';
//import mongoose from 'mongoose';
const { User } = './models/User.js';

//const mongoose = require('mongoose');
//const express = require('express');
//const cors = require('cors');
const app = express();

app.use(express.json());
//app.use(cors());
fdjsksafdksahj;

mongoose
  .connect(
    'mongodb+srv://adan:h8DuTiZyr2ZAgXeL@cluster0.7ljcxih.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post('/signin', async (req, res) => {
  const { username, password, email } = req.body;
  const userDoc = await User.create({ username, email, password });
  res.json(userDoc);
  res.json('test ok4');
  console.log('jkdjfs');
});

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
//port access

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

//h8DuTiZyr2ZAgXeL
//mongodb+srv://adan:h8DuTiZyr2ZAgXeL@cluster0.7ljcxih.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://adan:<password>@cluster0.7ljcxih.mongodb.net/?retryWrites=true&w=majority

//SHITMAN

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const userDoc = await UserModel.findOne({ email });
//   const passOk = bcrypt.compareSync(password, userDoc.password);
//   if (passOk) {
//     console.log(`Login user: ${userDoc.username}`);
//     // logged in
//     jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) throw err;
//       res.cookie('token', token).json({
//         id: userDoc._id,
//         email,
//       });
//     });
//   } else {
//     res.status(400).json('wrong credentials');
//   }
// });
