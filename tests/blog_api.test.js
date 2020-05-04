const mongoose = require("mongoose");
const supertest = require("supertest");
const helper = require("./blog_helper");
// const bcrypt = require("bcrypt");
const userHelper = require("./user_helper");
const app = require("../app");
const api = supertest(app);

const Blog = require("../models/blog");
const User = require("../models/user");

beforeEach(async () => {
  await Blog.deleteMany({});

  const blogObject = helper.initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObject.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

describe("when there is initially some blogs saved", () => {
  test("blogs are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all blogs are returned", async () => {
    const response = await api.get("/api/blogs");
    expect(response.body).toHaveLength(helper.initialBlogs.length);
  });

  test("a specific blog is within the returned blogs", async () => {
    const response = await api.get("/api/blogs");
    const urls = response.body.map((r) => r.url);
    expect(urls).toContain(helper.initialBlogs[0].url);
  });

  test("the unique identifier property of the blog is named id", async () => {
    const blogs = await helper.blogsInDb();
    blogs.forEach((blog) => {
      expect(blog.id).toBeDefined();
    });
  });
});

describe("viewing a specific blog", () => {
  test("succeeds with a valid id", async () => {
    const blogsAtStart = await helper.blogsInDb();
    const blogToView = blogsAtStart[0];

    const resultBlog = await api
      .get(`/api/blogs/${blogToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(resultBlog.body).toEqual(blogToView);
  });

  test("fails with statuscode 404 if blog does not exist", async () => {
    const validNonExistingId = await helper.nonExistingId();

    await api.get(`/api/blogs/${validNonExistingId}`).expect(404);
  });

  test("fails with statuscode 400 id is invalid", async () => {
    const invalidId = "5a3d5da59070081a82a3445";

    await api.get(`/api/blogs/${invalidId}`).expect(400);
  });
});

describe("adding of a new blog", () => {
  let token;
  describe("-- authorized --", () => {
    beforeEach(async () => {
      await User.deleteMany({});
      token = null;
      await userHelper.addUserToDb();
      newUser = userHelper.initialUsers[0];
      response = await api
        .post("/api/login")
        .send(newUser)
        .expect(200)
        .expect("Content-Type", /application\/json/);
      token = response.body.token;
    });

    test("succeeds with valid data", async () => {
      const newBlog = {
        title: "Test title",
        author: "Test author",
        url: "http://www.test.url.html",
        likes: 7,
      };
      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(newBlog)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);

      const titles = blogsAtEnd.map((r) => r.title);
      expect(titles).toContain(newBlog.title);

      const authors = blogsAtEnd.map((r) => r.author);
      expect(authors).toContain(newBlog.author);

      const urls = blogsAtEnd.map((r) => r.url);
      expect(urls).toContain(newBlog.url);
    });

    test("should set 0 likes if likes property is missing", async () => {
      const newBlog = {
        title: "Test title",
        author: "Test author",
        url: "http://www.test.url.html",
      };

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(newBlog)
        .expect(200);

      const blogsAtEnd = await helper.blogsInDb();
      const addedBlog = blogsAtEnd.find((blog) => blog.url === newBlog.url);
      expect(addedBlog.likes).toBe(0);
    });

    test("fails with status code 400 if url is missing", async () => {
      const newBlog = {
        title: "Test title",
        author: "Test author",
        likes: 7,
      };

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(newBlog)
        .expect(400);
      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
    });

    test("fails with status code 400 when blog title and url properties are missing", async () => {
      const newBlog = {
        author: "Test author",
        likes: 7,
      };

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(newBlog)
        .expect(400);
      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
    });
  });
  describe("-- unauthorized --", () => {
    test("fails with status code 401 if token missing", async () => {
      const newBlog = {
        title: "Test title",
        author: "Test author",
        likes: 7,
      };

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer `)
        .send(newBlog)
        .expect(401);
      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
    });
    test("fails with status code 401 if token invalid", async () => {
      token = `dfsdfsd`;
      const newBlog = {
        title: "Test title",
        author: "Test author",
        likes: 7,
      };

      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(newBlog)
        .expect(401);
      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);
    });
  });
});

describe("deletion of a blog", () => {
  let token;
  describe("-- authorized --", () => {
    beforeEach(async () => {
      await User.deleteMany({});

      token = null;
      await userHelper.addUserToDb();
      newUser = userHelper.initialUsers[0];
      response = await api
        .post("/api/login")
        .send(newUser)
        .expect(200)
        .expect("Content-Type", /application\/json/);
      token = response.body.token;
      await api
        .post("/api/blogs")
        .set("Authorization", `Bearer ${token}`)
        .send(helper.exampleBlog)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    test("succeeds with status code 204 if id is valid ", async () => {
      const blogsAtStart = await helper.blogsInDb();
      const blogToDelete = await Blog.find(helper.exampleBlog);

      await api
        .delete(`/api/blogs/${blogToDelete[0]._id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(204);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(blogsAtStart.length - 1);

      const urls = blogsAtEnd.map((r) => r.url);
      expect(urls).not.toContain(blogToDelete[0].url);
    });
    test("fails with statuscode 400 id is invalid", async () => {
      const invalidId = "5a3d5da59070081a82a3445";

      await api
        .delete(`/api/blogs/${invalidId}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(400);
    });
  });

  describe("-- unauthorized --", () => {
    test("fails with status code 401 if token missing", async () => {
      const blogsAtStart = await helper.blogsInDb();
      const blogToDelete = blogsAtStart[0];

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .set("Authorization", `Bearer `)
        .expect(401);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(blogsAtStart.length);

      const urls = blogsAtEnd.map((r) => r.url);
      expect(urls).toContain(blogToDelete.url);
    });

    test("fails with status code 401 if token invalid", async () => {
      const blogsAtStart = await helper.blogsInDb();
      const blogToDelete = blogsAtStart[0];
      token = `dfsdfsd`;
      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(401);

      const blogsAtEnd = await helper.blogsInDb();
      expect(blogsAtEnd).toHaveLength(blogsAtStart.length);

      const urls = blogsAtEnd.map((r) => r.url);
      expect(urls).toContain(blogToDelete.url);
    });
  });
});

describe("update of a blog", () => {
  test("succeeds with valid data", async () => {
    const newBlog = {
      title: "Test title",
      author: "Test author",
      url: "http://www.test.url.html",
      likes: 7,
    };
    const blogsAtStart = await helper.blogsInDb();
    const blogToUpdate = blogsAtStart[0];

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(newBlog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);

    const urls = blogsAtEnd.map((blog) => blog.url);
    expect(urls).toContain(newBlog.url);
  });
  test("succeeds with one property", async () => {
    const newBlog = {
      likes: 7,
    };
    const blogsAtStart = await helper.blogsInDb();
    const blogToUpdate = blogsAtStart[0];

    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(newBlog)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const blogsAtEnd = await helper.blogsInDb();
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length);

    const urls = blogsAtEnd.map((blog) => blog.url);
    expect(urls).toContain(blogToUpdate.url);
  });
  test("fails with statuscode 404 if blog does not exist", async () => {
    const newBlog = {
      title: "Test title",
      author: "Test author",
      url: "http://www.test.url.html",
      likes: 7,
    };
    const validNonExistingId = await helper.nonExistingId();

    await api
      .put(`/api/blogs/${validNonExistingId}`)
      .send(newBlog)
      .expect(404);
  });

  test("fails with statuscode 400 id is invalid", async () => {
    const newBlog = {
      title: "Test title",
      author: "Test author",
      url: "http://www.test.url.html",
      likes: 7,
    };
    const invalidId = "5a3d5da59070081a82a3445";

    await api
      .put(`/api/blogs/${invalidId}`)
      .send(newBlog)
      .expect(400);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
