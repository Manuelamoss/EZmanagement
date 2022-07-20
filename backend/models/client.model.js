const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const Client = sequelize.define(
    "client",
    {
      token: {
        type: DataTypes.STRING(20),
        primaryKey: true,
      },
      document: DataTypes.STRING(15),
      responsible: DataTypes.STRING(20),
      address: DataTypes.STRING,
      zipcode: {
        type: DataTypes.STRING(10),
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
    },
    {
      hooks: {
        beforeCreate: async function (user) {
          const salt = await bcrypt.genSalt(10); //whatever number you want
          user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
      instanceMethods: {
        validpassword: (password) => {
          return bcrypt.compareSync(password, this.password);
        },
      },
    }
  );
  Client.prototype.validpassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return Client;
};
