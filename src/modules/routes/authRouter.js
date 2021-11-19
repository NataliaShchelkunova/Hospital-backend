const Router = require("express");
const router = new Router();
const {
  registration,
  login,
  getUsers,
} = require("../controllers/authController");

//для прослушивания запросов
router.post("/registration", registration);
router.post("/autorisation", login);
router.get("/users", getUsers);

module.exports = router;
