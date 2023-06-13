const UserModel = require('../models/User.js');
const jwt = require('jsonwebtoken');
const { secret } = require('../config.js');

// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

async function doLogin(req, res) {
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({ email });
  const passOk = password === userDoc.password;
  // console.log(secret);

  if (passOk) {
    jwt.sign({ email, id: userDoc._id }, secret.jwt, {}, (err, token) => {
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
}

module.exports = { doLogin };
