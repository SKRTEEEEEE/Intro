require('dotenv').config();
const app = require('./app.js');

const { appConfig, db } = require(`./config.js`);
const connectDb = require('./db/mongodb.js');

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
