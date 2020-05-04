const infoRouter = require("express").Router();
const Person = require("../models/person");

infoRouter.get("/", (req, res) => {
  const date = Date().toLocaleString();
  res.send(`<div>Phonebook has info for ${Person.length} people</div>
      <div>${date}</div>`);
});
module.exports = infoRouter;
