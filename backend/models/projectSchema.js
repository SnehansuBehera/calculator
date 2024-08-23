import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client',
    },
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    employees: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        default: []
    }]

});
const Projects = mongoose.model('Projects', projectSchema);
export default Projects;