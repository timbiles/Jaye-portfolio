require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const { ApolloServer } = require('apollo-server-express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
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

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: (ctx) => ({... ctx})
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
      credentials: true,
      origin: 'http://localhost:3000',
    }
});

routes(app)

//run build
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
