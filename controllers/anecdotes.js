const anecdotesRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Anecdote = require("../models/anecdote");
const User = require("../models/user");
const { isObjectIdValid } = require("../utils/helper");


anecdotesRouter.get("/", async (req, res) => {
  const anecdotes = await Anecdote.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });
  res.json(anecdotes.map((anecdote) => anecdote.toJSON()));
});

anecdotesRouter.get("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const anecdote = await Anecdote.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });

  if (anecdote) {
    return res.json(anecdote.toJSON());
  } else return res.status(404).end();
});

anecdotesRouter.post("/", async (req, res) => {
  const body = req.body;

  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const anecdote = new Anecdote({
    content: body.content,
    createdAt: Date.now(),
    url: body.url,
    user: user._id,
    votes: 0
  });

  const savedAnecdote = await anecdote.save();
  user.anecdotes = user.anecdotes.concat(savedAnecdote._id);
  await user.save();
  res.json(savedAnecdote.toJSON());
});

anecdotesRouter.delete("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const anecdote = await Anecdote.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });

  if (!anecdote || anecdote.user._id.toString() === decodedToken.id.toString()) {
    await Anecdote.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
});

anecdotesRouter.put("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }

  const body = req.body;
  let anecdoteToUpdate = {};
  if (body.title) {
    anecdoteToUpdate.title = body.title;
  }
  if (body.author) {
    anecdoteToUpdate.author = body.author;
  }
  if (body.url) {
    anecdoteToUpdate.url = body.url;
  }
  if (body.likes) {
    anecdoteToUpdate.likes = body.likes;
  }
  if (body.user) {
    anecdoteToUpdate.user = body.user;
  }
  if (body.votes) {
    anecdoteToUpdate.votes = body.votes;
  }

  const anecdote = await Anecdote.findByIdAndUpdate(req.params.id, anecdoteToUpdate, {
    new: true,
    runValidator: true,
    context: "query",
  });

  if (anecdote) {
    if (anecdote.user.toString() === decodedToken.id.toString()) {
      return res.json(anecdote.toJSON());
    } else {
      res.status(401).json({ error: "unauthorized" });
    }
  } else return res.status(404).end();
});

module.exports = anecdotesRouter;
