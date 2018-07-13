require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controller");
//const axios = require("axios");

const port = 3001;
const app = express();

app.use(bodyParser.json());

console.log(process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => {
    // res.status(500).send(err);
    console.log(err);
  });

app.get(`/api/houses`, controller.allHouses);
app.put(`/api/addhouses`, controller.addHouses);
// // app.post();
// app.delete(`/api/removehouses`, controller.deleteHouses);

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
