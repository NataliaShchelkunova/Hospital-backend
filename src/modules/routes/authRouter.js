const Router = require("express");
const router = new Router();
const {
  registration,
  login,
  getUsers,
} = require("../controllers/authController");

const { check } = require("express-validator");

router.post(
  "/registration",
  [
    check("username", "Name cannot be empty").notEmpty(),
    check(
      "password",
      "Password cannot be empty or shorter than 6 characters "
    ).isLength({ min: 6 }),
  ],
  registration
);
router.post("/autorisation", login);
router.get("/users", getUsers);

module.exports = router;
