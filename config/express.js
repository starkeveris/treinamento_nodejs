const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
require('../config/db');

module.exports = () => {
    app.use(cors());
    app.use(bodyParser.json());

    app.use('/api', require('../core/auth/auth.route'));
    app.use('/api', require('../core/user/user.routes'));
    
    return app;
}