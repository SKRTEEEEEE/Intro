const config = {
  appConfig: {
    port: process.env.APP_PORT,
  },
  db: {
    uri: process.env.MONGODB_URI,
  },
};

module.exports = config;
