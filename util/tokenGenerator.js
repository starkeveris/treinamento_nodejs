var jwt = require('jsonwebtoken');

const tokenGenerator = (payload) => {
    let token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"});
    return token;
}
const tokenValidator = (token) => {
    if(!token) throw new Error('Token inválido!');
    return jwt.verify(token, process.env.SECRET);
}

module.exports = { tokenGenerator, tokenValidator };