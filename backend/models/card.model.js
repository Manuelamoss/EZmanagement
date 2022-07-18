const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Card = sequelize.define("card", {
    UID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    credito: DataTypes.FLOAT,
  });

  return Card;
};
