import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

const authenticate = async (req, res, next) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized. token failed.");
        }
    } else {
        res.status(401);
        throw new Error("Not token. Not authorized");
    }
}
const authorizeAsAdmin = async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as admin");
    }
}
export { authenticate, authorizeAsAdmin };