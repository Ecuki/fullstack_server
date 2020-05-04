const mongoose = require("mongoose");
const supertest = require("supertest");
const helper = require("./person_helper");
const app = require("../app");
const api = supertest(app);

const Person = require("../models/person");

beforeEach(async () => {
  await Person.deleteMany({});

  const personObject = helper.initialPersons.map(
    (person) => new Person(person)
  );
  const promiseArray = personObject.map((person) => person.save());
  await Promise.all(promiseArray);
});

describe("when there is initially some persons saved", () => {
  test("persons are returned as json", async () => {
    await api
      .get("/api/persons")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("all persons are returned ", async () => {
    const response = await api.get("/api/persons");
    expect(response.body).toHaveLength(helper.initialPersons.length);
  });
  test("a specific person is within the returned persons", async () => {
    const response = await api.get("/api/persons");
    const names = response.body.map((r) => r.name);
    expect(names).toContain(helper.initialPersons[0].name);
  });
  test("the unique identifier proprty of the person is named id", async () => {
    const persons = await helper.personsInDb();
    persons.forEach((person) => {
      expect(person.id).toBeDefined();
    });
  });
});

describe("viewing a specific person", () => {
  test("succeeds with a valid id", async () => {
    const personsAtStart = await helper.personsInDb();
    const personToView = personsAtStart[0];
    const resultPersons = await api
      .get(`/api/persons/${personToView.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(resultPersons.body).toEqual(personToView);
  });
  test("fails with statuscode 404 if person does not exist", async () => {
    const validNonExistingId = await helper.nonExistingId();

    await api.get(`/api/persons/${validNonExistingId}`).expect(404);
  });

  test("fails with statuscode 400 id is invalid", async () => {
    const invalidId = "5a3d5da59070081a82a3445";

    await api.get(`/api/persons/${invalidId}`).expect(400);
  });
});

describe("adding of a new person", () => {
  test("succeeds with valid data", async () => {
    const newPerson = {
      name: "John",
      number: "323323445",
    };

    await api
      .post("/api/persons")
      .send(newPerson)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const personsAtEnd = await helper.personsInDb();
    expect(personsAtEnd).toHaveLength(helper.initialPersons.length + 1);

    const names = personsAtEnd.map((r) => r.name);
    expect(names).toContain("John");
  });

  test("fails with status code 400 if name is missing", async () => {
    const newPerson = {
      number: "235345346",
    };

    await api
      .post("/api/persons")
      .send(newPerson)
      .expect(400);

    const personsAtEnd = await helper.personsInDb();

    expect(personsAtEnd).toHaveLength(helper.initialPersons.length);
  });
  test("fails with status code 400 if number is missing", async () => {
    const newPerson = {
      name: "John",
    };

    await api
      .post("/api/persons")
      .send(newPerson)
      .expect(400);

    const personsAtEnd = await helper.personsInDb();

    expect(personsAtEnd).toHaveLength(helper.initialPersons.length);
  });
});

describe("deletion of a person", () => {
  test("succeeds with status code 204 if id is valid", async () => {
    const personsAtStart = await helper.personsInDb();
    const personToDelete = personsAtStart[0];

    await api.delete(`/api/persons/${personToDelete.id}`).expect(204);

    const personsAtEnd = await helper.personsInDb();

    expect(personsAtEnd).toHaveLength(helper.initialPersons.length - 1);

    const names = personsAtEnd.map((person) => person.name);
    expect(names).not.toContain(personToDelete.name);
  });
  test("fails with statuscode 400 id is invalid", async () => {
    const invalidId = "5a3d5da59070081a82a3445";

    await api.delete(`/api/persons/${invalidId}`).expect(400);
  });
});

describe("update of a person", () => {
  test("succeeds with valid data", async () => {
    const newPerson = {
      name: "John",
      number: "323323445",
    };
    const personsAtStart = await helper.personsInDb();
    const personToUpdate = personsAtStart[0];

    await api
      .put(`/api/persons/${personToUpdate.id}`)
      .send(newPerson)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const personsAtEnd = await helper.personsInDb();
    expect(personsAtEnd).toHaveLength(helper.initialPersons.length);

    const names = personsAtEnd.map((person) => person.name);
    expect(names).toContain(newPerson.name);
  });

  test("succeeds with one property", async () => {
    const newPerson = {
      number: "2323423434",
    };
    const personsAtStart = await helper.personsInDb();
    const personToUpdate = personsAtStart[0];

    await api
      .put(`/api/persons/${personToUpdate.id}`)
      .send(newPerson)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const personsAtEnd = await helper.personsInDb();
    expect(personsAtEnd).toHaveLength(helper.initialPersons.length);

    const names = personsAtEnd.map((person) => person.name);
    expect(names).toContain(personToUpdate.name);
  });

  test("fails with statuscode 404 if person does not exist", async () => {
    const newPerson = {
      name: "John",
      number: "323323445",
    };
    const validNonExistingId = await helper.nonExistingId();

    await api
      .put(`/api/persons/${validNonExistingId}`)
      .send(newPerson)
      .expect(404);
  });

  test("fails with statuscode 400 id is invalid", async () => {
    const newPerson = {
      name: "John",
      number: "323323445",
    };
    const invalidId = "5a3d5da59070081a82a3445";

    await api
      .put(`/api/persons/${invalidId}`)
      .send(newPerson)
      .expect(400);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
