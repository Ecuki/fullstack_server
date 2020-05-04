const blogsRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Blog = require("../models/blog");
const User = require("../models/user");
const { isObjectIdValid } = require("../utils/helper");

// const getTokenFrom = (req) => {};

blogsRouter.get("/", async (req, res) => {
  const blogs = await Blog.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });
  res.json(blogs.map((blog) => blog.toJSON()));
});

blogsRouter.get("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const blog = await Blog.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });

  if (blog) {
    return res.json(blog.toJSON());
  } else return res.status(404).end();
});

blogsRouter.post("/", async (req, res) => {
  const body = req.body;

  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes ? body.likes : 0,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  res.json(savedBlog.toJSON());
});

blogsRouter.delete("/:id", async (req, res) => {
  const decodedToken = jwt.verify(req.token, process.env.SECRET);
  if (!req.token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }
  const blog = await Blog.findById(req.params.id).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });

  if (blog.user.username.toString() === decodedToken.username.toString()) {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
});

blogsRouter.put("/:id", async (req, res) => {
  if (!isObjectIdValid(req.params.id)) {
    return res.status(400).end();
  }

  const body = req.body;
  let blogToUpdate = {};
  if (body.title) {
    blogToUpdate.title = body.title;
  }
  if (body.author) {
    blogToUpdate.author = body.author;
  }
  if (body.url) {
    blogToUpdate.url = body.url;
  }
  if (body.likes) {
    blogToUpdate.likes = body.likes;
  }

  const blog = await Blog.findByIdAndUpdate(req.params.id, blogToUpdate, {
    new: true,
    runValidator: true,
    context: "query",
  });
  if (blog) {
    return res.json(blog.toJSON());
  } else return res.status(404).end();
});

module.exports = blogsRouter;
