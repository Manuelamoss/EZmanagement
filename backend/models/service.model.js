const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Service = sequelize.define("service", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    serviceName: DataTypes.STRING,
    serviceNumber: DataTypes.INTEGER,
  });

  return Service;
};
