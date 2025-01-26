import foodModel from './../models/food.model.js';
import fs from 'fs';

//!add food item

const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;
    const food = await foodModel.findOne({ name });
    if (food) {
        return res.status(201).json({
            success: false,
            message: "food already exist!!"
        })
    } else {
        const image_filename = `${req.file.filename}`;
        const food = new foodModel({
            name,
            description,
            price,
            image: image_filename,
            category
        })
        try {

            await food.save();
            res.status(200).json({
                success: true,
                message: "food added successfully!!"
            })
        } catch (error) {
            console.log("foodController code!!" + error);
            res.status(201).json({
                success: false,
                message: error
            })
        }
    }

}

//! all food list 
const listFood = async (req, res) => {
    try {
        const food = await foodModel.find()
        console.log(food);
        res.status(200).json({
            success: true,
            data: food
        });
    } catch (error) {
        console.log("Error to fetch food list: " + error);
        res.status(201).json({
            success: false,
            message: error
        })
    }

}

//!delete food item
const removeFood = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
        const food = await foodModel.findById(id);
        fs.unlink(`uploads/${food.image}`, () => { })
        await foodModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "food deleted successfully!!"
        })
    } catch (error) {
        console.log("foodController code!!" + error);
        res.status(201).json({
            success: false,
            message: error
        })
    }
}
export { addFood, listFood, removeFood }