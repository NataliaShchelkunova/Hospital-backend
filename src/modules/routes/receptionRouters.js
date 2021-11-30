const { Router } = require("express");
const receptionRouter = new Router();

const {
  createNewReception,
  getAllReception,
} = require("../controllers/receptionController");

receptionRouter.post("/createNewReception", createNewReception);
receptionRouter.get("/getAllReception", getAllReception);

module.exports = receptionRouter;
