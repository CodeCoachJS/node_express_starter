import { parse } from "csv-parse";
import { Request, Response } from "express";
import fs from "fs";

type CSVRow<T extends Record<string, string>> = T;

const uploadCsv = async (req: Request, res: Response) => {
  try {
    const { file } = req;

    if (!file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    const json: CSVRow<Record<string, string>>[] = [];
    // we want to wait for the file to be parsed before we send a response
    await new Promise((res, rej): void => {
      fs.createReadStream(`./${file.path}`)
        .pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data", function (row: CSVRow<Record<string, string>>) {
          json.push(row);
        })
        .on("end", () => {
          res("Success");
        })
        .on("error", (err) => {
          rej(err);
        });
    });
    res.status(200).send({ data: json });
  } catch (err: unknown) {
    if (err instanceof Error)
      res.status(500).send({ message: "File upload failed", err: err.message });
  } finally {
    // we want to clean up the files after we are done with them
    const files: string[] = fs.readdirSync("./temp");

    files.forEach((file) => {
      fs.unlinkSync(`./temp/${file}`);
    });
  }
};

export { uploadCsv };
