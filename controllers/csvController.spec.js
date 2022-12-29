const request = require("supertest");
const { app } = require("../server");
const fs = require("fs");

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

  it("parses datat from a csv file", async () => {
    const res = await request(app)
      .post("/files/upload")
      .attach("csvFile", "./mockData/uber_jan_feb.csv");

    const json = res.body.data;
    expect(json.length).toEqual(355);
  });

  it("rejects a request with no csv file", async () => {
    const res = await request(app).post("/files/upload");

    const err = res.body.err;
    expect(err).toEqual("Cannot read properties of undefined (reading 'path')");
  });

  it("unlinks all files in the temp folder", async () => {
    const res = await request(app)
      .post("/files/upload")
      .attach("csvFile", "./mockData/uber_jan_feb.csv");

    expect(fs.unlinkSync).toHaveBeenCalled();
  });
});
