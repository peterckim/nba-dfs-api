const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

/* Connect to MS SQL Server db */
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: true
      }
    }
  }
);

module.exports = sequelize;
