const { Router } = require("express");
const receptionRouter = new Router();

const {
  createNewReception,
  getAllReception,
  deleteOneReception,
  editOneReception
} = require("../controllers/receptionController");

receptionRouter.post("/createNewReception", createNewReception);
receptionRouter.get("/getAllReception", getAllReception);
receptionRouter.delete("/deleteOneReception", deleteOneReception);
receptionRouter.patch("/editOneReception", editOneReception);

module.exports = receptionRouter;
