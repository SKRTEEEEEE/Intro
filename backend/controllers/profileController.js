const jwt = require('jsonwebtoken');
const { secret } = require('../config.js');

// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

function getProfile(req, res) {
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, secret.jwt);
    res.json(decoded);
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = { getProfile };
