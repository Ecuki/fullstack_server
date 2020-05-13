const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const middleware = require("../utils/middleware");

const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    },

});

commentsSchema.post('save', function (doc, next) {
    doc.populate("user", {
        username: 1,
        name: 1,
        id: 1,
    }).execPopulate().then(function () {
        next();
    });
});

commentsSchema.set("toJSON", {
    transform: middleware.idToString,
});
commentsSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Comment", commentsSchema);
