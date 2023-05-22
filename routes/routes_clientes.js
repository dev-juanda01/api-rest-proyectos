const {
  createCliente,
  readClientes,
  updateCliente,
} = require("../controllers/ctrl_cliente");

const { Router } = require("express"),
  routes = Router();

routes
  .get("/", readClientes)
  .post("/", createCliente)
  .put("/:id", updateCliente);

module.exports = routes;
