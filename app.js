const routesEtapas = require("./routes/routes_etapas"),
  routesUniversidad = require("./routes/routes_universidad"),
  routesTipoproyecto = require("./routes/routes_tipoproyecto"),
  routesCliente = require("./routes/routes_clientes");

const express = require("express"),
  morgan = require("morgan"),
  dotenv = require("dotenv").config(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = process.env.PORT || 5000,
  app = express();

// Configuración de la aplicación
app.set("port", port);

// Middlewares
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(
    cors({
      origin: "*",
    })
  );

// Rutas
app
  .use("/api/etapas", routesEtapas)
  .use("/api/universidad", routesUniversidad)
  .use("/api/tipoproyectos", routesTipoproyecto)
  .use("/api/clientes", routesCliente);

module.exports = app;
