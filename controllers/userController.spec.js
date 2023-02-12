const request = require("supertest");
const { app } = require("../server");

describe("userController", () => {
  // let's add a user before each test that we can rely on to be in the database
  beforeEach(async () => {
    await request(app).post("/user").send({
      id: "123",
      email: "brianjenney83@gmail.com",
      name: "brian",
    });
  });

  it("gets a user", async () => {
    //TODO: write a test that gets a user
  });

  it("updates a user", async () => {
    //TODO: write a test that updates a user
  });
  it("deletes a user", async () => {
    //TODO: write a test that deletes a user
  });
  it("rejects requests with no `id` property", async () => {
    //TODO: write a test that rejects requests with no `id` property
  });
});
