import express from 'express';
import verifyJWT from '../middleware/auth.middleware.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', verifyJWT, getUsersForSidebar)

export default router;