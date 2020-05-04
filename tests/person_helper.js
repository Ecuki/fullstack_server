const Person = require("../models/person");

const initialPersons = [
  {
    name: "Emil",
    number: "12312312312",
  },
  {
    name: "Emil J",
    number: "12312312312",
  },
];

const nonExistingId = async () => {
  const person = new Person({
    name: "Emil Jdd",
    number: "12312312dd312",
  });
  await person.save();
  await person.remove();
  return person._id.toString();
};

const personsInDb = async () => {
  const persons = await Person.find({});
  return persons.map((person) => person.toJSON());
};

module.exports = {
  initialPersons,
  nonExistingId,
  personsInDb,
};
