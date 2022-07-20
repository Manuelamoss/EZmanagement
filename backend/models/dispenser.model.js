const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Dispenser = sequelize.define("dispenser", {
    serialNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
  return Dispenser;
};
