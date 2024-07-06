const router = require("express").Router();
const { signup, login, checkAuth } = require("./controllers/Auth");
const verifyToken = require("./verifyToken");

router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);
module.exports = router;
