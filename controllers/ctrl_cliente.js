const Cliente = require("../models/modelo_cliente");
const { request, response } = require("express");

// crear
const createCliente = async (req = request, res = response) => {
  try {
    const { nombre } = req.body;
    const { email } = req.body;

    if (!nombre)
      return res.status(400).send({ msg: "No ingresaste el nombre" });

    const cliente = await Cliente.findOne({ nombre });

    if (cliente) {
      return res.status(400).send({ msg: "El cliente ya existe" });
    }
    const data = {
      nombre,
      email,
    };

    const nuevoCliente = await new Cliente(data);
    await nuevoCliente.save();

    return res.status(201).send(nuevoCliente);
  } catch (e) {
    return res.status(500).send({
      msg: "Error: " + e,
    });
  }
};

const readClientes = async (req = request, res = response) => {
  try {
    const clientes = await Cliente.find({});

    if (clientes.length == 0)
      return res.status(404).send({ msg: "No existen clientes registrados" });

    return res.status(200).send({ clientes });
  } catch (e) {
    return res.status(500).send({
      msg: "Error: " + e,
    });
  }
};

const updateCliente = async (req, res) => {
  try {
    const { id } = req.params,
      data = req.body;

    const clienteActualizado = await Cliente.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!clienteActualizado)
      return res.status(404).send({ msg: "El cliente no existe" });

    return res.status(200).send(clienteActualizado);
  } catch (error) {
    res.status(500).send({ msg: "Error: " + e });
  }
};

module.exports = {
  createCliente,
  readClientes,
  updateCliente,
};
