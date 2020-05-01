const config = require("config");
const mongoose = require("mongoose");
const Fawn = require("fawn");
const winston = require("winston");


module.exports = function() {
  const db = config.get("DB_CONN");
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => winston.info(`Successfully connected to ${db}...`));

  Fawn.init(mongoose);
};
