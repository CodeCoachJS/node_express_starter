const { Router } = require('express');
const {
    createUser,
    getUser,
    removeUser,
    updateUser,
} = require('../controllers/userController');
const { validateUserBody } = require('../middlewares/validateUserBody');

const router = Router();

// listen for incoming requests on these routes dksfsdlal
// for example 'user/add' will send requests to our `createUser` function

router.route('/add').post(validateUserBody, createUser);
router.route('/get').get(validateUserBody, getUser);
router.route('/update').post(validateUserBody, updateUser);
router.route('/delete').post(validateUserBody, removeUser);

module.exports = router;
