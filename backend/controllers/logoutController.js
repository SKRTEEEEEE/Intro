function doLogout(req, res) {
  res.clearCookie('token').json('ok');
}

module.exports = { doLogout };
