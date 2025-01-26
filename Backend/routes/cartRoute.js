import express from 'express';
import { addToCart,getCart,removeFromCart } from '../controllers/cart.controller.js';
import authMiddleware from '../middleware/auth.js';
const cartRoute = express.Router();

//!add to cart route
cartRoute.post('/add', authMiddleware, addToCart);

//!Remove from cart route
cartRoute.post('/remove', authMiddleware, removeFromCart);

//!User cart route
cartRoute.post('/cartData', authMiddleware, getCart);

export default cartRoute;