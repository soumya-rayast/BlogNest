require('dotenv').config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const { connectDB } = require("./connection");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
