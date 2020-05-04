const mongoose = require("mongoose");
const middleware = require("../utils/middleware");
const uniqueValidator = require("mongoose-unique-validator");

const personSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, required: true, unique: true },
  number: { type: String, minlength: 8, required: true },
});

personSchema.set("toJSON", {
  transform: middleware.idToString,
});
personSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Person", personSchema);
