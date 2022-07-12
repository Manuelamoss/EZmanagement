module.exports = {
  /* don't expose password or any sensitive info, done only for demo */
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
