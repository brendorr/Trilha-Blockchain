require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const Sequelize = require("sequelize");
const connection = new Sequelize("guiaperguntas","root",dbPassword,{
    host: `localhost`,
    dialect: `mysql`
})

module.exports = connection;