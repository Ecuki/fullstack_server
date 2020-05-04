const app = require("./app");
const http = require("http");
const logger = require("./utils/loggers");
const config = require("./utils/config");

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`App listening on port ${config.PORT}!`);
});
