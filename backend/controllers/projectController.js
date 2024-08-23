import Projects from "../models/projectSchema.js";


const addProject = async (req, res) => {
    const { name, description, deadline, clientId, lead, employees } = req.body;
    if (!name || !description || !deadline || !clientId || !lead) {
        return res.status(400).json({ message: "Please provide all required information" });
    }

    const project = new Projects({
        name,
        description,
        deadline,
        clientId,
        lead,
        employees
    });

    try {
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, description, deadline, clientId, lead, employees } = req.body;

    try {
        const project = await Projects.findByIdAndUpdate(
            id,
            { name, description, deadline, clientId, lead, employees },
            { new: true, runValidators: true }
        );

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Projects.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const allProjects = async (req, res) => {
    try {
        const projects = await Projects.find({}).populate('clientId lead employees');
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const projectById = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Projects.findById(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export { addProject, updateProject, deleteProject, allProjects, projectById };
