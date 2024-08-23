import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
    }

})
const Account = mongoose.model('Account', accountSchema);
export default Account;