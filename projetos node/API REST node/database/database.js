require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('guiaperguntas', 'root', dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.games = require('./game')(sequelize, Sequelize);

module.exports = db;