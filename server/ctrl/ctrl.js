const submitContacts = (req, res) => {
  console.log(req.body);
};

const getEvents = (req, res) => {
  const db = req.app.get('db');

  db.events
    .get_events()
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  submitContacts,
  getEvents
};
