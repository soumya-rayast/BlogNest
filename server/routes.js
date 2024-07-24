const router = require("express").Router();
const { signup, login, checkAuth } = require("./controllers/Auth");
const verifyToken = require("./verifyToken");
const {createBlog} = require("./controllers/Blog")


router.post("/signup", signup);
router.post("/login", login);
router.get("/checkAuth", verifyToken, checkAuth);
router.post("/createBlog",verifyToken,createBlog)

module.exports = router;
