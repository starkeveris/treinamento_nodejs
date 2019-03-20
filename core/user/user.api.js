const userDAO = require('./user.dao');

const createUser = async (req, res) => {
    let body = req.body;
    try {
        let userCreated = await userDAO.createUserDAO(body);
        res.status(201).json(userCreated);
    } catch (err) {
        res.status(500).json(err);
    }
}
const readUser = async (req, res) => {
    let id = req.params.id;
    try {
        let user = await userDAO.readUserDAO(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
const updateUser = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    try {
        let updatedUser = await userDAO.updateUserDAO(id, body);
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);      
    }
}
const deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        let deletedUser = await userDAO.deleteUserDAO(id);
        res.status(204).json(deletedUser);
    } catch (err) {
        res.status(500),json(err);
    }
}
const listUsers = async (req, res) => {
    try {
        let users = await userDAO.listUsersDAO();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    listUsers
}

