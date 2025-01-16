// /routes/userRoutes.js

import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';


const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

export default router;




