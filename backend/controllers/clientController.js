import Client from "../models/clientModel.js";

// Create a new client
const createClient = async (req, res) => {
    const { client_name, client_mail, client_Address, client_img } = req.body;
    if (!client_name || !client_mail || !client_Address || !client_img) {
        return res.status(400).json({ message: "Please provide all required information" });
    }

    const client = new Client({
        client_name,
        client_mail,
        client_Address,
        client_img,

    });

    try {
        await client.save();
        res.status(201).json(client);
    } catch (error) {

        res.status(500).json({ error });
    }
};

// Update an existing client
const updateClient = async (req, res) => {
    const { id } = req.params;
    const { client_name, client_mail, client_Address, client_img } = req.body;

    try {
        const client = await Client.findByIdAndUpdate(
            id,
            { client_name, client_mail, client_Address, client_img, projects },
            { new: true, runValidators: true }
        );

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a client
const deleteClient = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await Client.findByIdAndDelete(id);

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get all clients
const allClients = async (req, res) => {
    try {
        const clients = await Client.find({});
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get a client by ID
const clientById = async (req, res) => {
    const { id } = req.params;

    try {
        const client = await Client.findById(id);

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export { createClient, updateClient, deleteClient, allClients, clientById };
