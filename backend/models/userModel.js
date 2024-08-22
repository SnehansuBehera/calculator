import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Manager', 'Boss', 'Lead', 'Frontend Dev', 'Backend Dev', 'DevOps Eng', 'UI/UX Dev', 'SDE', 'Intern'],

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
}, { timestamps: true })
const User = mongoose.model('User', userSchema);
export default User;