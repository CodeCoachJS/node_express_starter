const { Router } = require("express");
const { uploadCsv } = require("../controllers/csvController");

const router = Router();

const multer = require("multer");
const upload = multer({ dest: "temp/" });

// the key 'csvFile' is the name of the file input field in the form
router.route("/upload").post(upload.single("csvFile"), uploadCsv);

module.exports = router;
