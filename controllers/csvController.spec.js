const request = require("supertest");
const { app } = require("../server");
const fs = require("fs");

const TEMP_FILE_PATH = "./mockData/uber_jan_feb.csv";

describe("csvController", () => {
  beforeEach(() => {
    jest.spyOn(fs, "unlinkSync");
  });

  afterAll(() => {
    const files = fs.readdirSync("./temp");
    files.forEach((file) => {
      fs.unlinkSync(`./temp/${file}`);
    });
  });

  it("unlinks all files in the temp folder", async () => {});
});
