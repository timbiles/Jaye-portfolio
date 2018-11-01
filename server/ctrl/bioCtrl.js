const getBio = (req, res) => {
    const db = req.app.get('db');
  
    db.query('select * from bios')
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };

  const editBio = (req, res) => {
    const db = req.app.get('db');
  
    db.bios.save({id: 1, biography: req.body.bio})
      .then(resp => {
        res.status(200).send(resp);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };


module.exports = {
    getBio,
    editBio
}