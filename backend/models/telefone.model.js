const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Telefone = sequelize.define("telefone", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numero: DataTypes.INTEGER(15),
  });

  return Telefone;
};
