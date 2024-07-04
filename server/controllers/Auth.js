const bcrypt = require("bcrypt")
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ success: false, message: "Please login" });
        }
        const securePassword = await bcrypt.hash(password, 10);
        user = await User.create({ username, email, password: securePassword });
        await user.save();
        return res.status(201).json({
            success: true,
            message: "user created successfully",
            data: user
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: "This account is not verified" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie("token", token, { httpOnly: true, secure: true });
        return res.status(500).json({ success: true, message: "user logged in success" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
module.exports = {signup,login}