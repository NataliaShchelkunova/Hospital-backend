const User = require("../../models/user/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports.registration = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    try {
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "An user with the same name already exists" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword });
      await user.save();
      return res.json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Registration error" });
    }
  } else {
    res.status(400).json({ message: "Check all field " });
  }
};

module.exports.login = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports.getUsers = async (req, res) => {
  try {
    res.json("server working");
  } catch (error) {}
};