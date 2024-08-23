import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    client_name: {
        type: String,
        required: true,
    },
    client_mail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    client_Address: {
        type: String,
        required: true,
    },
    client_img: {
        type: String,
        required: true,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Projects',
        default: []
    }],

});

const Client = mongoose.model('Client', clientSchema);

export default Client;
