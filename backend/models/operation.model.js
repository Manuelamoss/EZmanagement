const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Operation = sequelize.define(
    "operation",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      wineName: DataTypes.STRING(15),
      volume: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      discount: DataTypes.FLOAT,
      service: DataTypes.INTEGER,
      tap: DataTypes.INTEGER,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
    },
    { timestamps: false }
  );

  return Operation;
};
