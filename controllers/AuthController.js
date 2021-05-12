const User = require('../models/User');
const bcrypt = require("bcryptjs")

exports.signUp = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const hashedpassword = await bcrypt.hash(password,12);
        const user = await User.create({
            username,
            password : hashedpassword
        });

        // Create session and Logg In the user
        req.session.user = user
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

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({username});
        if(!user){
            res.status(404).json({
                Message : 'User Not Found'
            })
        }

        const isCorrect = await bcrypt.compare(password,user.password);

        if(!isCorrect)
        {
            res.status(400).json({
                Message : 'Password is not Correct'
            })
        }
        // Create session and store some data in it
        req.session.user = user
        res.status(200).json({
            status: "success ! You're Logged In",
        })
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: error.message
        })
    }
}

