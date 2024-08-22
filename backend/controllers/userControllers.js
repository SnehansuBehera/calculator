import createToken from "../utils/token.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"

const createUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role) {
        throw new Error("Please provide all info");
    }
    const alreadyExists = await User.findOne({ email });
    if (alreadyExists) {
        res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role
    })
    try {
        await newUser.save();
        createToken(res, newUser._id);
        res.status(201).json({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role,
            isAdmin: newUser.isAdmin
        })
    } catch (error) {
        res.status(500);
        res.send("Request failed");
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error("Please provide all info");
    }
    const user = await User.findOne({ email });
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            createToken(res, user._id);
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                isAdmin: user.isAdmin
            })
        } else {
            res.status(500);
            res.send("Password incorrect");
        }
    } else {
        res.status(500);
        res.send("User not found");
    }

}

const logout = async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(201).send("User logged out");
}

export { createUser, login, logout };