
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'No Authorized login again.' });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("auth middleware error: " + error);
        res.json({ success: false, message: 'Authentication failed' })
    }

}

export default authMiddleware;
