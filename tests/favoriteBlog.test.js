const favoriteBlog = require("../utils/list_helper").favoriteBlog;

describe("favorite blog", () => {
  test("when list has only one blog equals it", () => {
    const blogs = [
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0,
      },
    ];
    const result = favoriteBlog(blogs);

    const expectedBlog = {
      title: blogs[0].title,
      author: blogs[0].author,
      likes: blogs[0].likes,
    };
    expect(result).toEqual(expectedBlog);
  });

  test("when list has many blogs equals to this with max likes", () => {
    const blogs = [
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 0,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 1,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 12,
        __v: 0,
      },
    ];
    const result = favoriteBlog(blogs);
    const expectedBlog = {
      title: blogs[2].title,
      author: blogs[2].author,
      likes: blogs[2].likes,
    };
    expect(result).toEqual(expectedBlog);
  });

  test("when is no blogs should return 0", () => {
    const blogs = [];
    const expectedBlog = null;
    const result = favoriteBlog(blogs);
    expect(result).toEqual(expectedBlog);
  });
});
