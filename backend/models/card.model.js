const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Card = sequelize.define("card", {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    balance: DataTypes.FLOAT,
  });

  return Card;
};
