const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let persons = [
  {
    name: "fgdfg",
    number: "dfsdf",
    id: 1,
  },
  {
    name: "gdfgdf",
    number: "gfgfg",
    id: 2,
  },
];
// const requestLogger = (req, res, next) => {
//   console.log("Method", req.method);
//   console.log("Path", req.path);
//   console.log("Body", req.body);
//   console.log("---------");
//   next();
// };

const generateId = () => {
  return (Math.random() * 10000000000000).toFixed(0);
};
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("build"));
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
// app.use(requestLogger);

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  } else if (persons.find((p) => p.name === body.name)) {
    return res.status(400).json({
      error: "name must be unique",
    });
  } else if (!body.number) {
    return res.status(400).json({
      error: "number missing",
    });
  }
  const person = { name: body.name, number: body.number, id: generateId() };

  persons = persons.concat(person);
  res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.get("/info", (req, res) => {
  const date = Date().toLocaleString();
  res.send(`<div>Phonebook has info for ${persons.length} people</div>
  <div>${date}</div>`);
});

const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

// app.use(unknowEndpoint);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
