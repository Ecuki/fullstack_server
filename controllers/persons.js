const personsRouter = require("express").Router();
const Person = require("../models/person");
const { isObjectIdValid } = require("../utils/helper");

personsRouter.get("/", async (req, res) => {
  const persons = await Person.find({});
  res.json(persons.map((person) => person.toJSON()));
});

personsRouter.get("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const person = await Person.findById(req.params.id);

  if (person) {
    return res.json(person.toJSON());
  } else return res.status(404).end();
});

personsRouter.post("/", async (req, res) => {
  const body = req.body;

  const person = new Person({ name: body.name, number: body.number });

  const savedPerson = await person.save();
  res.json(savedPerson.toJSON());
});

personsRouter.delete("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  await Person.findByIdAndRemove(req.params.id);
  res.status(204).end();
});

personsRouter.put("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const body = req.body;

  const personToUpdate = {};
  if (body.name) {
    personToUpdate.name = body.name;
  }
  if (body.number) {
    personToUpdate.number = body.number;
  }

  const person = await Person.findByIdAndUpdate(req.params.id, personToUpdate, {
    new: true,
    runValidators: true,
    context: "query",
  });
  if (person) {
    return res.json(person.toJSON());
  } else return res.status(404).end();
});

module.exports = personsRouter;
