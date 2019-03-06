const submitContacts = (req, res) => {
  console.log(req.body);
  res.status(200).send('yup')
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

const addEvent = async (req, res, next) => {
  const db = req.app.get('db');

  try {
    await db.jaye_calendar.insert(req.body)
    res.sendStatus(200)
  } catch(err) {
    res.status(500).send(err);
  }
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
