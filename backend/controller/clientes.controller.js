const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;
// Create and Save a new Cliente
exports.create = (req, res) => {
  //Validate request
  if (!req.body.token) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  //Create a Cliente
  const tutorial = {
    token: req.body.token,
    documento: req.body.documento,
    responsavel: req.body.responsavel,
    endereco: req.body.endereco,
    cep: req.body.cep,
    email: req.body.email,
    senha: req.body.senha,
  };
  // Save Cliente in the database
  Cliente.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cliente.",
      });
    });
};
// Retrieve all Clientes from the database.
exports.findAll = (req, res) => {
  const token = req.query.token;
  var condition = token ? { token: { [Op.like]: `%${token}%` } } : null;
  Cliente.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
// Find a single Cliente with an id
exports.findOne = (req, res) => {
  const id = req.params.token;
  Cliente.findOne(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cliente with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cliente with id=" + id,
      });
    });
};
// Update a Cliente by the id in the request
exports.update = (req, res) => {};
// Delete a Cliente with the specified id in the request
exports.delete = (req, res) => {};
// Delete all Clientes from the database.
exports.deleteAll = (req, res) => {};
// Find all published Clientes
exports.findAllPublished = (req, res) => {};
