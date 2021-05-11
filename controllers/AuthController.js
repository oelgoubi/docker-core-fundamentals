const User = require('../models/User');
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res, next) => {
    const { username, password } = req.body;
    console.log(password)
    const hashedpassword = await bcrypt.hash(password,12);
    try {
        const user = await User.create({
            username,
            password : hashedpassword
        });

        res.status(201).json({
            status: "success",
            user
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                post
            } 
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message
        })
    }
}

