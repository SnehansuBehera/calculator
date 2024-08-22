import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        index:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
       lowercase:true,
       trim:true,
    },
    password: {
        type: String,
        required: [true,"Password is required"]
    },
    role: {
        type: String,
        enum: ['Manager', 'Boss', 'Lead', 'Frontend Dev', 'Backend Dev', 'DevOps Eng', 'UI/UX Dev', 'SDE', 'Intern'],

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
        
    },
}, { timestamps: true })
const User = mongoose.model('User', userSchema);
export default User;