import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import mongoose from 'mongoose';
import foodRouter from './routes/foodRoute.js';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config"
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/order.route.js';
import path from "path";
import { log } from 'console';
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cors([process.env.FRONTEND_URL]));

const __dirname = path.resolve();

console.log(__dirname);


//!DB connection
connectDB();

//!Api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'))
app.use('/api/user', userRouter);
app.use("/api/user/cart", cartRoute);
app.use("/api/order", orderRoute);

app.use(express.static(path.join(__dirname,"/Frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
})

app.use('/admin', express.static(path.join(__dirname, 'Admin', 'dist')));
app.get('/admin', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'Admin', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
// mongodb+srv://odk1572:<db_password>@mealmate.jlhru.mongodb.net/?