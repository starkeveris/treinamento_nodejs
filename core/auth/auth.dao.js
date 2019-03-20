const User = require('../../models/user.model');

const authUserDAO = async (user) => {
    return await User.findOne({userName: user});
}

module.exports = { authUserDAO }