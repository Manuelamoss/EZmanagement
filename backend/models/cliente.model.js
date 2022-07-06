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
      is: /^\d{5}-\d{3}$/i,
    },
    status: DataTypes.BOOLEAN,
    descricao: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    senha: {
      type: DataTypes.STRING,
    },
  });

  const Telefone = sequelize.define("telefone", {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    numero: DataTypes.INTEGER(15),
  });

  Cliente.hasMany(Telefone);
  sequelize.sync();
};

  
  


