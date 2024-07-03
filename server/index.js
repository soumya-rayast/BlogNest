const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();

const port = 3000;

app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/api",routes)
app.listen(port,()=>{
    console.log("Server is Running ")
});
// 3 : 