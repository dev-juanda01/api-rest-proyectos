const {
  createTipoProyecto,
  readTipoProyectos,
  updateTipoProyecto,
} = require("../controllers/ctrl_tipoproyectos");

const { Router } = require("express"),
  routes = Router();

routes
  .get("/", readTipoProyectos)
  .post("/", createTipoProyecto)
  .put("/:id", updateTipoProyecto);

module.exports = routes;
