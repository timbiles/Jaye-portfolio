require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const port = process.env.SERVER_PORT || 3004;

const app = express();
app.use(json());

// console.log(`${__dirname}/../build`);
// app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

routes(app)

//run build
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
