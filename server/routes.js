const { submitContacts, getEvents, addEvent, removeEvent } = require('./ctrl/eventCtrl');
const { getBio, editBio } = require('./ctrl/bioCtrl');

module.exports = app => {
  // sessions
  app.put('/api/admin', (req, res) => {
    const { user, pass } = req.body;
    const { ADMIN_LOGIN, ADMIN_PASSWORD } = process.env;

    if (user === ADMIN_LOGIN && pass === ADMIN_PASSWORD) {
      req.session.username = user;
      res.status(200).send(req.session);
    } else {
      res.status(500).send('error');
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
  app.put('/api/contacts', submitContacts);

  // app.get('/api/events', getEvents);
  // app.post('/api/events', addEvent);
  // app.delete('/api/events/:id', removeEvent);

  app.get('/api/biography', getBio);
  app.put('/api/biography', editBio);
};
