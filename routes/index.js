const { Router } = require("express");
const superExpensiveRoutes = require("./superExpensiveRoute");

const router = Router();

// we inject all our user routes to listen for requests on '/user'
router.use("/superexpensive", superExpensiveRoutes);

module.exports = router;
