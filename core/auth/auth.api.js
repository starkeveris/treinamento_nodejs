const authDAO = require('./auth.dao');
const encrypting = require('../../util/encrypt');
const tokenGenerator = require('../../util/tokenGenerator');

const authUser = async (req, res) => {
    let user = req.body.user,
        password = req.body.password;
    try {
        let userData = await authDAO.authUserDAO(user);
        let checkedPass = await encrypting.descrypt(password, userData.password);
        
        if (checkedPass) {
            let token = tokenGenerator.tokenGenerator({id: userData.userName});
            res.status(200).json(token);
        }
        else {
            res.status(401).send('Senha inválida!');
        }
    } catch (err) {
        res.status(401).send('Usuário ou senha inválio(s)!');
    }
}
const tokenChecker = async (req, res, next) => {
    let token = req.headers['x-access-token'];
    try {
        let tokenChecked = await tokenGenerator.tokenValidator(token);
        req.token = tokenChecked;
        next();
    } catch (err) {
        res.status(401).json(err);
    }
}

module.exports = { authUser, tokenChecker }