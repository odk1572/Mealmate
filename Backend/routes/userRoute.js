import express from 'express';
import { loginUser,registerUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

//!User Registration route
userRouter.post('/register', registerUser);

//!User Login route
userRouter.post('/login', loginUser);

export default userRouter