require('dotenv').config();
const app = require('./app.js');
// const UserModel = require('./models/User.js');
// const jwt = require('jsonwebtoken');

const { appConfig, db } = require(`./config.js`);
const connectDb = require('./db/mongodb.js');

// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const userDoc = await UserModel.findOne({ email });
//   const passOk = password === userDoc.password;

//   if (passOk) {
//     jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) {
//         res.status(500).json({ error: 'An error occurred' });
//       } else {
//         res.cookie('token', token, { httpOnly: true }).json({
//           id: userDoc._id,
//           email: userDoc.email,
//           username: userDoc.username,
//         });
//       }
//     });
//     console.log(`Login ${userDoc.username} with email ${userDoc.email}`);
//   } else {
//     res.status(400).json('wrong credentials');
//   }
// });

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
