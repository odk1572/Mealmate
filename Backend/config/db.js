import mongoose from "mongoose";


//!connect to MongoDB
export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('MongoDB Connected!!'))
        .catch(err => console.log(err));
}
// mongodb+srv://odk1572:<db_password>@mealmate.jlhru.mongodb.net/?