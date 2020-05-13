const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const middleware = require("../utils/middleware");

const anecdoteSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true,
    },
    url: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    votes: {
        type: Number,
        required: true,
    },

});

anecdoteSchema.set("toJSON", {
    transform: middleware.idToString,
});
anecdoteSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Anecdote", anecdoteSchema);
