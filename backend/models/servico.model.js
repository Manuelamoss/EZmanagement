const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Servico = sequelize.define("servico", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nomeServico: DataTypes.STRING,
    numeroServico: DataTypes.INTEGER,
  });

  return Servico;
};
