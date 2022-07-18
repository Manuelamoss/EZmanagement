const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// serving static files
app.use(express.static("public"));

const db = require("./models");
//db.sequelize.sync({ force: true })  --> drop existing tables and re-sync database.
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.use(function (req, res, next) {
  next();
});
require("./routes/clients.routers")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 