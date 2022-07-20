module.exports = (app) => {
  const client = require("../controller/clients.controller");
  var router = require("express").Router();

  // Create a new Cliente
  router.post("/", client.create);
  // Retrieve all Clientes
  router.get("/clients", client.findAll);
  // Retrieve a single Cliente with id
  router.get("/:token", client.findOne);
  app.use("/api", router);
};
