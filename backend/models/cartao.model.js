const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cartao = sequelize.define("cartao", {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    credito: DataTypes.FLOAT,
  });

  return Cartao;
};
