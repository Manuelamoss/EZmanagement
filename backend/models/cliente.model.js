const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cliente = sequelize.define("cliente", {
    token: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    documento: DataTypes.STRING(15),
    responsavel: DataTypes.STRING(20),
    endereco: DataTypes.STRING,
    cep: {
      type: DataTypes.STRING(10),
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    senha: {
      type: DataTypes.STRING,
    },
    status: DataTypes.BOOLEAN,
    descricao: DataTypes.TEXT,
  });

  return Cliente;
};

  
  


