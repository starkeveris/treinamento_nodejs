const express = require('express');
const router = express.Router();
const userAPI = require('./user.api');

router.route('/users')
    .get(userAPI.listUsers);
router.route('/create_user')
    .post(userAPI.createUser);
router.route('/read_user/:id')
    .get(userAPI.readUser);
router.route('/update_user/:id')
    .put(userAPI.updateUser);
router.route('/delete_user/:id')
    .delete(userAPI.deleteUser);

module.exports = router;