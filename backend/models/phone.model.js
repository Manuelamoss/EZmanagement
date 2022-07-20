const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Phone = sequelize.define("phone", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    phoneNumber: DataTypes.INTEGER(15),
  });

  return Phone;
};
