const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Dosadora = sequelize.define("dosadora", {
    serial: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
  return Dosadora;
};
