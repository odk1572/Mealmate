import mongoose, { mongo, Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    cart: { type: Object, default: {} }
}, { minimize: false, timestamps: true })
const userModel = mongoose.models.user || mongoose.model('User', userSchema);

export default userModel;