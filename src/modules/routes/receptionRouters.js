const { Router } = require("express");
const receptionRouter = new Router();

const { createNewReception } = require("../controllers/receptionController");

receptionRouter.post("/createNewReception", createNewReception);

module.exports = receptionRouter;
