const logger = require("./loggers");

const morganConfig = function(tokens, req, res) {
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
};

const unknowEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  let token = null;
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    token = authorization.substring(7);
  }
  req.token = token;
  next();
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "JsonWebTokenError") {
    return response.status(401).json({ error: "invalid token" });
  }
  logger.error(error.message);
  next(error);
};

const idToString = (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString();
  delete returnedObject._id;
  delete returnedObject.__v;
};

module.exports = {
  morganConfig,
  errorHandler,
  unknowEndpoint,
  idToString,
  tokenExtractor,
};
