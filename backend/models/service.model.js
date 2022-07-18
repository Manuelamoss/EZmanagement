const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Service = sequelize.define("service", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nomeServico: DataTypes.STRING,
    numeroServico: DataTypes.INTEGER,
  });

  return Service;
};
