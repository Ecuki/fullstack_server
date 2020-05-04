const mostLikes = require("../utils/list_helper").mostLikes;

describe("favorite blogs author", () => {
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
    const result = mostLikes(blogs);

    const expectedBlog = {
      author: "Edsger W. Dijkstra",
      likes: 5,
    };
    expect(result).toEqual(expectedBlog);
  });

  test("when list has many blogs equals to this with max likes from all blogs", () => {
    const blogs = [
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 3,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 10,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 12,
        __v: 0,
      },
    ];
    const result = mostLikes(blogs);
    const expectedBlog = {
      author: "Edsger W. Dijkstra",
      likes: 13,
    };
    expect(result).toEqual(expectedBlog);
  });

  test("when is no blogs should return 0", () => {
    const blogs = [];
    const expectedBlog = null;
    const result = mostLikes(blogs);
    expect(result).toBe(expectedBlog);
  });
});
