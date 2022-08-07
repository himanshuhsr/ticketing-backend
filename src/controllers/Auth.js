const User = require('../models/User');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const RegisterController = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        const accessToken = jwt.sign(
            {
                id: savedUser._id,
                isAdmin: savedUser.isAdmin,
                username: savedUser.username
            },
            config.jwt.secret,
            { expiresIn: '3d' }
        );
        return res.status(200).json({ savedUser, accessToken });
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    register: RegisterController
};
