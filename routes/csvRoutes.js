const { Router } = require('express');
const multer = require('multer');
const { uploadCsv } = require('../controllers/csvController');

const router = Router();

const upload = multer({ dest: 'temp/' });

// the key 'csvFile' is the name of the file input field in the form
router.route('/upload').post(upload.single('csvFile'), uploadCsv);

module.exports = router;
