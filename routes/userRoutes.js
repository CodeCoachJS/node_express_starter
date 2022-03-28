const { Router } = require('express');
const {
    createUser,
    getUser,
    removeUser,
    updateUser,
} = require('../controllers/userController');

const router = Router();

// listen for incoming requests on these routes
// for example 'user/add' will send requests to our `createUser` function

router.route('/add').post(createUser);
router.route('/get').get(getUser);
router.route('/update').post(updateUser);
router.route('/delete').post(removeUser);

module.exports = router;
