import express from 'express';
import { addProject, allProjects, projectById, updateProject, deleteProject } from '../controllers/projectController.js'
import { authenticate, authorizeAsAdmin } from '../middleware/authMiddleware.js'
const router = express.Router();

router.route('/addProject').post(authenticate, authorizeAsAdmin, addProject);
router.get('/all', authenticate, authorizeAsAdmin, allProjects);
router.get('/project', authenticate, authorizeAsAdmin, projectById);
router.route('/updateProject').put(authenticate, authorizeAsAdmin, updateProject);
router.route('/deleteProject').delete(authenticate, authorizeAsAdmin, deleteProject);


export default router;