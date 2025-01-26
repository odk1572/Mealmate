import foodModel from '../models/food.model.js';
import userModel from './../models/user.model.js';

//!aad to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cart = await userData.cart;
        let itemId = req.body.itemId;
        const response = await foodModel.findById(itemId);
        if (!response) {
            return res.json({ success: false, message: 'item not exist in out database!!' });
        }
        if (!cart[itemId]) {
            cart[itemId] = 1;
        }
        else {
            cart[itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cart })
        res.json({ success: true, message: "adding to cart!" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error adding to cart!" })
    }
}

//!remover from cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cart = await userData.cart;
        if (cart[req.body.itemId] > 0) {
            cart[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cart });
        res.json({ success: true, message: "removing from cart!" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error removing from cart!" })
    }
}

//!fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cart = await userData.cart;
        if (cart <= 0) {
            return res.json({ success: false, message: "Cart is empty!" });
        }
        res.json({ success: true, cart })
    } catch (error) {
        console.log("get cart item failed", error);
        res.json({ success: false, message: "fail to fetch" });
    }
}

export { addToCart, removeFromCart, getCart };