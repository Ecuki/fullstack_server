const Blog = require("../models/blog");
const initialBlogs = [
  {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 0,
  },
  {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.edu/~rubinsondd/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 1,
  },
];
const exampleBlog = {
  title: "Go To Statement Considered Harmful",
  author: "Edsger W. Dijkstra",
  url:
    "http://www.u.arizona.edu/~rubinsdfdfon/copyright_violations/Go_To_Considered_Harmful.html",
  likes: 0,
};
const nonExistingId = async () => {
  const blog = new Blog({
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url:
      "http://www.u.arizona.eddfu/~rubinsondd/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 1,
  });
  await blog.save();
  await blog.remove();
  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  exampleBlog,
  nonExistingId,
  blogsInDb,
};
