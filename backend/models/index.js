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
db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.telefones = require("./telefone.model")(sequelize, Sequelize);
db.cartoes = require("./cartao.model")(sequelize, Sequelize);
db.dosadoras = require("./dosadora.model")(sequelize, Sequelize);
db.operacoes = require("./operacao.model")(sequelize, Sequelize);
db.servicos = require("./servico.model")(sequelize, Sequelize);

db.clientes.hasMany(db.telefones, { foreignKey: "token_cliente" });
db.telefones.belongsTo(db.clientes, { foreignKey: "token_cliente" });

db.clientes.hasMany(db.cartoes, { foreignKey: "token_cliente" });
db.cartoes.belongsTo(db.clientes, { foreignKey: "token_cliente" });

db.clientes.hasMany(db.dosadoras, { foreignKey: "token_cliente" });
db.dosadoras.belongsTo(db.clientes, { foreignKey: "token_cliente" });

db.cartoes.hasMany(db.operacoes, { foreignKey: "uid_cartao" });
db.operacoes.belongsTo(db.cartoes, { foreignKey: "uid_cartao" });

db.dosadoras.hasMany(db.operacoes, { foreignKey: "serial_dosadora" });
db.operacoes.belongsTo(db.dosadoras, { foreignKey: "serial_dosadora" });
module.exports = db;