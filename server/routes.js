const router = require("express").Router();
const {signup,login,checkAuth} = require("./controllers/Auth");
router.post("/signup",signup);
router.post("/login",login);
router.get("/checkAuth",checkAuth);
module.exports = router
