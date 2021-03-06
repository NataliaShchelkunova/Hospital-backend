const User = require("../../models/user/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.secret;
const { validationResult } = require("express-validator");

const generateAccecToken = (id, username) => {
  const payload = {
    id,
    username,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

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
      const token = generateAccecToken(user._id, username);
      return res.json({ token, username });
    } catch (error) {
      res.status(400).json({ message: "Registration error" });
    }
  } else {
    res.status(400).json({ message: "Check all field" });
  }
};

module.exports.login = async (req, res) => {
  const errors = validationResult(req);
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      const validPassword = bcrypt.compareSync(password, user.password);
      if (validPassword) {
        const token = generateAccecToken(user._id, username);
        return res.json({ token, username });
      } else {
        return res.status(400).json({ message: `Password is uncorrect` });
      }
    } else {
      return res.status(400).json({ message: `user ${username} is defined` });
    }
  } catch (errors) {
    res.status(400).json({ message: "Autorisation error" });
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    res.json("server working");
  } catch (error) {
    res.status(400).json({ message: "Users get error" });
  }
};
