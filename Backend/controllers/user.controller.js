import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import validator from "validator";

//!Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Email not registered." })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.json({ success: false, message: "Incorrect password." })
        }
        const token = createToken(user._id);
        res.json({ success: true, token })
    } catch (error) {
        console.log("login error: " + error.message);
        res.status(500).json({ success: false, message: "server error!! login" })
    }

}


//!JWT Authentication
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY)
}

//!Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //!check user already registered
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            return res.status(403).json({
                success: false,
                message: "email already exist!!"
            })
        }
        //!validate user email and password
        if (!validator.isEmail(email)) {
            return res.status(403).json({ success: false, message: "email is not valid" })
        }
        if (password.length < 8) {
            return res.status(403).json({ success: false, message: "Please enter a strong password" })
        }
        console.log('object')
        //!hashing user password
        const hashedPassword = await bcrypt.hash(password, 10);

        //!register the user
        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            role: "user"
        })

        const newUser = await user.save();
        //!give user response
        const token = createToken(newUser._id)
        res.json({ success: true, token: token, message: "user has been registered" })
    } catch (error) {
        console.log("registration fail:" + error.message)
        res.status(500).json({ success: false, message: "server error!! registration" })
    }

}


export { loginUser, registerUser }