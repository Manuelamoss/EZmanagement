const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Operacao = sequelize.define(
    "operacao",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nomeVinho: DataTypes.STRING(15),
      volume: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
      desconto: DataTypes.FLOAT,
      servico: DataTypes.INTEGER,
      bico: DataTypes.INTEGER,
      data: DataTypes.DATE,
      hora: DataTypes.TIME,
    },
    { timestamps: false }
  );

  return Operacao;
};
