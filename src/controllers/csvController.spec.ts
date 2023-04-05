import request from "supertest";
import { app } from "../server";
import fs from "fs";
import path from "path";

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
      .attach(
        "csvFile",
        path.resolve(__dirname, "../mockData/uber_jan_feb.csv")
      );

    const json = res.body.data;
    expect(json.length).toEqual(355);
  });

  it("rejects a request with no csv file", async () => {
    const res = await request(app).post("/files/upload");

    expect(res.status).toEqual(400);
  });

  it("unlinks all files in the temp folder", async () => {
    await request(app)
      .post("/files/upload")
      .attach(
        "csvFile",
        path.resolve(__dirname, "../mockData/uber_jan_feb.csv")
      );

    expect(fs.unlinkSync).toHaveBeenCalled();
  });
});
