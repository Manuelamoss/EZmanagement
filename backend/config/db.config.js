module.exports = {
  /* don't expose password or any sensitive info, done only for demo */
  HOST: "sql737.main-hosting.eu",
  USER: "u776047309_TallesBelchior",
  PASSWORD: "36549392@Ez",
  DB: "u776047309_TesteSQL",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};