const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./src/modules/routes/authRouter");
const receptionRouter = require("./src/modules/routes/receptionRouters");
const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", authRouter);
app.use("/", receptionRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.url);
    app.listen(PORT, () => console.log(`Server listen on port ${PORT} `));
  } catch (e) {
    res.status(400).json({ message: "Error server listen" });
  }
};

start();
