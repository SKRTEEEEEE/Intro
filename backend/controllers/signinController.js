const UserModel = require('../models/User');

async function doSignin(req, res) {
  const { username, password, email } = req.body;
  console.log('Received data:', { username, password, email });

  try {
    const userDoc = await UserModel.create({ username, email, password });
    res.json(userDoc);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = { doSignin };
