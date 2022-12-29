const { Router } = require('express');
const csvRoutes = require('./csvRoutes');
const userRoutes = require('./userRoutes');
const router = Router();

// we inject all our user routes to listen for requests on '/user'
router.use('/user', userRoutes);
router.use('/files', csvRoutes);

module.exports = router;
