module.exports = (app) => {
  const clientes = require("../controller/clientes.controller");
  var router = require("express").Router();

  // Create a new Cliente
  router.post("/", clientes.create);
  // Retrieve all Clientes
  router.get("/clientes", clientes.findAll);
  // Retrieve a single Cliente with id
  router.get("/:id", clientes.findOne);
  app.use("/api", router);
};
