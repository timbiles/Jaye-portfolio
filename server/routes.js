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
};
