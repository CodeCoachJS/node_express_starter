const { Router } = require("express");
const userRoutes = require("./userRoutes");
const csvRoutes = require("./csvRoutes");
const router = Router();

// we inject all our user routes to listen for requests on '/user'
router.use("/user", userRoutes);
router.use("/files", csvRoutes);

module.exports = router;
