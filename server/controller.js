module.exports = {
  allHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .all_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  },

  addHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .add_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  },

  deleteHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .delete_houses(id)
      .then(houses => res.status(200).send(houses))
      .catch(err => {
        res.status(500).send(err);
        console.log("Something has gone wrong!");
      });
  }
};
