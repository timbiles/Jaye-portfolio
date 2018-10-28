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

const addEvent = (req, res) => {
  const db = req.app.get('db');
  const { event, date, location } = req.body;

  db.events.add_event([event, date, location])
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const removeEvent = (req, res) => {
    const db = req.app.get('db');
  
    db.events.remove_event([req.params.id])
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };

module.exports = {
  submitContacts,
  getEvents,
  addEvent,
  removeEvent
};
