const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const sum = blogs.reduce((a, b) => a + b.likes, 0);

  return sum;
};

const favoriteBlog = (blogs) => {
  const max = _.maxBy(blogs, "likes");

  return max
    ? { title: max.title, author: max.author, likes: max.likes }
    : null;
};

const mostBlogs = (blogs) => {
  const countBlogsByAuthor = _.countBy(blogs, "author");
  const sorted = _.keys(countBlogsByAuthor)
    .map((k) => {
      return { author: k, blogs: countBlogsByAuthor[k] };
    })
    .sort((a, b) => (a.blogs > b.blogs ? -1 : 1));
  return sorted.length === 0 ? null : sorted[0];
};

const mostLikes = (blogs) => {
  const countBlogsByAuthor = _.countBy(blogs, "author");
  const unsorted = _.keys(countBlogsByAuthor).map((k) => {
    let likes = 0;
    blogs.map((blog) => (likes += blog.author === k ? blog.likes : 0));
    return { author: k, likes };
  });
  const sorted = unsorted.sort((a, b) => (a.likes > b.likes ? -1 : 1));
  return sorted.length === 0 ? null : sorted[0];
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
