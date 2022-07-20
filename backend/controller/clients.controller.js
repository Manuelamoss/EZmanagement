const db = require("../models");
const Client = db.clients;
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
  const client = {
    token: req.body.token,
    document: req.body.document,
    responsible: req.body.responsible,
    address: req.body.address,
    zipcode: req.body.zipcode,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status,
    description: req.body.description,
  };
  // Save Cliente in the database
  Client.create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client.",
      });
    });
};
// Retrieve all Clientes from the database.
exports.findAll = (req, res) => {
  const token = req.query.token;
  var condition = token ? { token: { [Op.like]: `%${token}%` } } : null;
  Client.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving clients.",
      });
    });
};
// Find a single Cliente with an id
exports.findOne = (req, res) => {
  const token = req.params.token;
  Client.findByPk(token)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Client with id=${token}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Client with id=" + token,
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
