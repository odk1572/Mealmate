import express from 'express';
import { addFood , listFood, removeFood } from '../controllers/food.controller.js';
import multer from 'multer';



const foodRouter = express.Router();

//!image storage Engin
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage })


foodRouter.post('/add', upload.single('image'), addFood)

foodRouter.get("/list", listFood)

foodRouter.post("/remove-food", removeFood)







export default foodRouter