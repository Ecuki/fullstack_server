const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./utils/loggers");
const blogsRouter = require("./controllers/blogs");
const infoRouter = require("./controllers/info");
const loginRouter = require("./controllers/login");
const personsRouter = require("./controllers/persons");
const usersRouter = require("./controllers/users");

const middleware = require("./utils/middleware");
const morgan = require("morgan");

logger.info("conection to", config.MONGODB);

mongoose
  .connect(config.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    logger.info("Conected to MongoDB");
  })
  .catch((err) => {
    logger.info("error connecting to MongoDB", err.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(morgan(middleware.morganConfig));
app.use(middleware.tokenExtractor);
app.use("/api/login", loginRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/persons", personsRouter);
app.use("/api/users", usersRouter);
app.use("/info", infoRouter);

if (process.env.NODE_ENV === "test") {
  const testingRouter = require("./controllers/testing");
  app.use('/api/testing', testingRouter)
}

app.use(middleware.errorHandler);
app.use(middleware.unknowEndpoint);
module.exports = app;
