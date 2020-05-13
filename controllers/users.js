const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { isObjectIdValid } = require("../utils/helper");

userRouter.get("/", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  const users = await User.find({}).populate("blogs", {
    title: 1,
    author: 1,
    url: 1,
    id: 1,
  }).populate("anecdotes", {
    content: 1,
    votes: 1,
    url: 1,
    id: 1,
  });
  res.json(users.map((user) => user.toJSON()));
});

userRouter.get("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const user = await User.findById(req.params.id).populate("blogs", {
    title: 1,
    author: 1,
    url: 1,
    id: 1,
  }).populate("anecdotes", {
    content: 1,
    votes: 1,
    url: 1,
    id: 1,
  });;
  res.json(user.toJSON());
});

userRouter.post("/", async (req, res) => {

  const body = req.body;
  if (body.password.length < 3) {
    return res.status(400).json({
      error: "`password` is shorter than the minimum allowed length (3) ",
    });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();
  res.json(savedUser);
});


userRouter.delete("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  if (req.params.id === decodedToken.id.toString()) {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }


});

module.exports = userRouter;
