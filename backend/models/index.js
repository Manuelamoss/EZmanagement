const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.clients = require("./client.model.js")(sequelize, Sequelize);
db.telefones = require("./phone.model")(sequelize, Sequelize);
db.cards = require("./card.model")(sequelize, Sequelize);
db.dispensers = require("./dispenser.model")(sequelize, Sequelize);
db.operations = require("./operation.model")(sequelize, Sequelize);
db.services = require("./service.model")(sequelize, Sequelize);

db.clients.hasMany(db.telefones, { foreignKey: "token_client" });
db.telefones.belongsTo(db.clients, { foreignKey: "token_client" });

db.clients.hasMany(db.cards, { foreignKey: "token_client" });
db.cards.belongsTo(db.clients, { foreignKey: "token_client" });

db.clients.hasMany(db.dispensers, { foreignKey: "token_client" });
db.dispensers.belongsTo(db.clients, { foreignKey: "token_client" });

db.cards.hasMany(db.operations, { foreignKey: "uid_card" });
db.operations.belongsTo(db.cards, { foreignKey: "uid_card" });

db.dispensers.hasMany(db.operations, { foreignKey: "serialNumber_dispenser" });
db.operations.belongsTo(db.dispensers, {
  foreignKey: "serialNumber_dispenser",
});
module.exports = db;