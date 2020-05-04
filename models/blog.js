const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const middleware = require("../utils/middleware");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    required: true,
  },
  author: {
    type: String,
    minlength: 3,
    required: true,
  },
  url: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
  },
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

blogSchema.set("toJSON", {
  transform: middleware.idToString,
});
blogSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Blog", blogSchema);
