const mostBlogs = require("../utils/list_helper").mostBlogs;

describe("Most blogs author", () => {
  test("has largest amount of blogs", () => {
    const blogs = [
      {
        _id: "5a422aa71b5ghf",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 0,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676234d",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 1,
        __v: 0,
      },
      {
        _id: "5a422d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 12,
        __v: 0,
      },
      {
        _id: "5a422aa71b54a676237f8",
        title: "Go To Statement Considered Harmful",
        author: "Emil",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 12,
        __v: 0,
      },
      {
        _id: "5aaa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W.",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 12,
        __v: 0,
      },
    ];
    result = mostBlogs(blogs);
    const expectedAuthor = {
      author: "Edsger W. Dijkstra",
      blogs: 3,
    };
    expect(result).toEqual(expectedAuthor);
  });

  test("should be null ", () => {
    const blogs = [];
    result = mostBlogs(blogs);
    const expectedAuthor = null;
    expect(result).toEqual(expectedAuthor);
  });

  test("should be equal to the author of blog", () => {
    const blogs = [
      {
        _id: "5a422aa71b5ghf",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url:
          "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 0,
        __v: 0,
      },
    ];
    result = mostBlogs(blogs);
    const expectedAuthor = {
      author: "Edsger W. Dijkstra",
      blogs: 1,
    };
    expect(result).toEqual(expectedAuthor);
  });
});
