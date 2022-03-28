const { Router } = require('express');
const userRoutes = require('./userRoutes');
const router = Router();

// we inject all our user routes to listen for requests on '/user'
router.use('/user', userRoutes);

module.exports = router;
