const Router = require("express");
const router = new Router();
const controller = require("./authController");

//для прослушивания запросов
router.post("/registration", controller.registration);
router.post("/autorisation", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
