const config = {
  appConfig: {
    port: process.env.APP_PORT,
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
  secret: {
    jwt: process.env.SECRET_JWT,
  },
};

module.exports = config;
