require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const path = require('path');

const port = process.env.SERVER_PORT || 3004;
const {submitContacts} = require('./ctrl/ctrl');

const app = express();
app.use(bodyParser.json());

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

// sessions
app.put('/api/admin', (req, res) => {
  const { user, pass } = req.body;
  const { ADMIN_LOGIN, ADMIN_PASSWORD } = process.env;
  
  if (user === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
    req.session.username = user;
    res.status(200).send(req.session);
  } else {
    res.status(500).send('error')
  }
});

app.get('/api/logged-in', (req, res) => {
  if (req.session.username) {
    return res.status(200).send(req.session);
  } else {
    return res.status(500);
  }
});

//endpoints
app.put('/api/contacts', submitContacts)

//run build
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});