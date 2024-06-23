import userService from "../services/userService.js";

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUser = async (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    try {
        const result = await userService.createUser(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default {
    getUsers,
    createUser
};
