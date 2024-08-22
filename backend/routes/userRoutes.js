import express from 'express';
import { createUser, login, logout } from '../controllers/userControllers.js';
const router = express.Router();

router.route('/signup').post(createUser);
router.route('/login').post(login);
router.route('/logout').post(logout);

export default router;