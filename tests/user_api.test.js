const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const supertest = require("supertest");
const helper = require("./user_helper");
const app = require("../app");

const api = supertest(app);

// const User = require("../models/user");

describe("when there is initially one user in db", () => {
  beforeEach(async () => {
    await helper.addUserToDb();
  });

  test("creation succeeds with a fresh username ", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: "mluukkai",
      name: "Matti Luukkainen",
      password: "salainen",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((u) => u.username);
    expect(usernames).toContain(newUser.username);
  });
  test("creation fails if username already taken ", async () => {
    const usersAtStart = await helper.usersInDb();

    const newUser = {
      username: helper.initialUsers[0].username,
      name: "Matti Luukkainen",
      password: "salainen",
    };

    await api
      .post("/api/users")
      .send(newUser)
      .expect(400)
      .expect("Content-Type", /application\/json/);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
  test("fails with statuscode 400 password is to short", async () => {
    const usersAtStart = await helper.usersInDb();
    const newUser = {
      username: "root",
      password: "sa",
    };

    const response = await api
      .post(`/api/users`)
      .send(newUser)
      .expect(400);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
    expect(response.body.error).toContain(
      "`password` is shorter than the minimum allowed length (3)"
    );
  });
  test("fails with statuscode 400 username is to short", async () => {
    const usersAtStart = await helper.usersInDb();
    const newUser = {
      username: "rt",
      password: "sadfsf",
    };

    const response = await api
      .post(`/api/users`)
      .send(newUser)
      .expect(400);

    const usersAtEnd = await helper.usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
    expect(response.body.error).toContain(
      `(\`${newUser.username}\`) is shorter than the minimum allowed length (3)`
    );
  });
});
afterAll(() => {
  mongoose.connection.close();
});
