const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./src/modules/routes/authRouter");
const PORT = process.env.PORT || 9000;

const app = express();

const url =
  "mongodb+srv://User:Restart987@cluster0.mttvv.mongodb.net/TestDB?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());
app.use("/", authRouter);

const start = async () => {
  try {
    await mongoose.connect(url);
    app.listen(PORT, () => console.log(`Server listen on port ${PORT} `));
  } catch (e) {
    console.log(e);
  }
};

start();
