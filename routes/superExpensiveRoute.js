const { Router } = require("express");
const {
  superExpensiveController,
  clearCache,
} = require("../controllers/superExpensiveController");

const router = Router();

router.route("/").post(superExpensiveController);
router.route("/clear").get(clearCache);

module.exports = router;
