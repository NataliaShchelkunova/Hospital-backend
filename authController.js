const User = require("./src/models/user/User");
const bcrypt = require("bcryptjs");

class authController {
  async registration(req, res) {
    try {
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword });
      await user.save();
      return res.json({ message: "Пользователь успешно зарегестрирован" });
    } catch (error) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
    } catch (error) {}
  }
  async getUsers(req, res) {
    try {
      res.json("server working");
    } catch (error) {}
  }
}

module.exports = new authController();
