const { Router } = require("express");
const receptionRouter = new Router();

const {
  createNewReception,
  getAllReception,
  deleteOneReception
} = require("../controllers/receptionController");

receptionRouter.post("/createNewReception", createNewReception);
receptionRouter.get("/getAllReception", getAllReception);
receptionRouter.delete("/deleteOneReception", deleteOneReception);

module.exports = receptionRouter;
