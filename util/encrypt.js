const bcrypt = require('bcrypt');
const saltRounds = 10;

const encrypt = async (pass) => {
    let hash = await bcrypt.hash(pass, saltRounds);
    return hash;
}
const descrypt = async (pass, hash) => {
    let res = await bcrypt.compare(pass, hash);
    return res;
}

module.exports = { encrypt, descrypt }