const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Dispenser = sequelize.define("dispenser", {
    serial: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
  return Dispenser;
};
