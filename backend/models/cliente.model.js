const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cliente = sequelize.define("cliente", {
    token: {
      type: DataTypes.BIGINT(20),
      primaryKey: true,
    },
    documento: DataTypes.STRING(15),
    responsavel: DataTypes.STRING(20),
    endereço: DataTypes.STRING,
    cep: {
      type: DataTypes.STRING(10),
      is: /^\d{5}-\d{3}$/i,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    senha: {
      type: DataTypes.STRING,
    },
  });
  return Cliente;
};
