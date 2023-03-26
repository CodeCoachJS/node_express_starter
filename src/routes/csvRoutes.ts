import { Router } from "express";
import { uploadCsv } from "../controllers/csvController";

const router = Router();

import multer from "multer";
const upload = multer({ dest: "temp/" });

// the key 'csvFile' is the name of the file input field in the form
router.route("/upload").post(upload.single("csvFile"), uploadCsv);

export default router;
