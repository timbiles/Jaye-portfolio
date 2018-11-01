const submitContacts = (req, res) => {
  console.log(req.body);
};

const getEvents = (req, res) => {
  const db = req.app.get('db');

  db.query(`select * from jaye_calendar order by date`)
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const addEvent = (req, res) => {
  const db = req.app.get('db');

  db.jaye_calendar.insert(req.body)
    .then(resp => {
      res.status(200).send(resp);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const removeEvent = (req, res) => {
    const db = req.app.get('db');
  
    db.jaye_calendar.destroy({id: req.params.id})
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
