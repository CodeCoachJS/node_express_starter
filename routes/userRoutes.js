const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUser,
  removeUser,
  updateUser,
} = require('../controllers/userController');
const { validateUserBody } = require('../middlewares/validateUserBody');

// listen for incoming requests on these routes
router.route('').get(getAllUsers).post(validateUserBody, createUser);

router
  .route('/:id')
  .get(validateUserBody, getUser)
  .patch(validateUserBody, updateUser)
  .delete(validateUserBody, removeUser);

module.exports = router;