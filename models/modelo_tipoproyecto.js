const { Schema, model } = require("mongoose");

const TipoProyectos = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    enum: [
      "ENSAYO",
      "ARTÍCULO",
      "MONOGRAFIA",
      "TRABAJO FINAL DE GRADO",
      "TRABAJO FINAL DE ESPECIALIZACION",
    ],
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model("TipoProyectos", TipoProyectos);
