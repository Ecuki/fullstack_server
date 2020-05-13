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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

blogSchema.post('save', function (doc, next) {
  doc.populate("user", {
    username: 1,
    name: 1,
    id: 1,
  }).populate({
    path: "comments", populate: {
      path: "user"
    }
  }).execPopulate().then(function () {
    next();
  });
});

blogSchema.set("toJSON", {
  transform: middleware.idToString,
});
blogSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Blog", blogSchema);
