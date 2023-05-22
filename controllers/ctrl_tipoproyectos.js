const TipoProyectos = require("../models/modelo_tipoproyecto");

const readTipoProyectos = async (req, res) => {
  try {
    const tipoProyectos = await TipoProyectos.find({});

    if (tipoProyectos.length == 0)
      return res
        .status(404)
        .send({ msg: "No hay tipos de proyectos registrados" });

    return res.status(200).send({ tipoProyectos });
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const createTipoProyecto = async (req, res) => {
  try {
    let { nombre, ...body } = req.body;

    if (!nombre)
      return res.status(400).send({ msg: "No ingresaste el nombre" });

    nombre = nombre.toUpperCase();

    const consultarTipo = await TipoProyectos.find({ nombre });

    if (consultarTipo)
      return res
        .status(400)
        .send({ msg: "El tipo ya existe en la base de datos" });

    const tipoProyecto = await TipoProyectos({ nombre, ...body });
    await tipoProyecto.save();

    return res.status(201).send(tipoProyecto);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

const updateTipoProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    let { nombre, ...body } = req.body;

    nombre = nombre.toUpperCase();

    const tipoProyectoActualizado = await TipoProyectos.findByIdAndUpdate(
      id,
      { nombre, ...body },
      { new: true }
    );

    if (!tipoProyectoActualizado)
      return res.status(404).send({ msg: "El tipo de proyecto no existe" });

    return res.status(200).send(tipoProyectoActualizado);
  } catch (error) {
    return res.status(500).send({ msg: `Error: ${error}` });
  }
};

module.exports = {
  createTipoProyecto,
  readTipoProyectos,
  updateTipoProyecto,
};
