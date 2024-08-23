import express from 'express';
import { createClient, updateClient, deleteClient, allClients, clientById } from '../controllers/clientController.js'
import { authenticate, authorizeAsAdmin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/allClients', authenticate, authorizeAsAdmin, allClients);
router.get('/client/:id', authenticate, authorizeAsAdmin, clientById);
router.route('/createClient').post(authenticate, authorizeAsAdmin, createClient);
router.route('/updateClient/:id').put(authenticate, authorizeAsAdmin, updateClient);
router.route('/deleteClient/:id').delete(authenticate, authorizeAsAdmin, deleteClient);


export default router;