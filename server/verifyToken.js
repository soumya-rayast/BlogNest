const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token || "";
    if (token) {
        return res.status(400).json({ message: "Access Denied" });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid Token" })
            }
            else{
                req.id = decoded.id;
                next();
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = verifyToken;