const express = require('express');
const authAPI = require('./auth.api');
const router = express.Router();

router.route('/auth')
    .post(authAPI.authUser);

router.use('/*', authAPI.tokenChecker);

module.exports = router;