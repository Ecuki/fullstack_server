require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/persons");

// const generateId = () => {
//   return (Math.random() * 10000000000000).toFixed(0);
// };
const app = express();
app.use(express.static("build"));
app.use(express.json());
app.use(cors());

app.use(
  morgan(function(tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons.map((person) => person.toJSON()));
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      (error) => next(error);
    });
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;

  const person = new Person({ name: body.name, number: body.number });

  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => res.json(savedAndFormattedPerson))
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  if (body.name === undefined) {
    return res.status(400).json({
      error: "name missing",
    });
  }
  if (body.number === undefined) {
    return res.status(400).json({
      error: "number missing",
    });
  }
  const person = { name: body.name, number: body.number };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((returnedPerson) => {
      res.json(returnedPerson.toJSON());
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((person) => {
      res.json(person.toJSON());
    })
    .catch((error) => next(error));
});

app.get("/info", (req, res) => {
  const date = Date().toLocaleString();
  res.send(`<div>Phonebook has info for ${Person.length} people</div>
  <div>${date}</div>`);
});

const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknowEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }
  next(error);
};
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
