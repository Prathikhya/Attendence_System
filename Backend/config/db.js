const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {

    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: require('mysql2'),
});

module.exports = sequelize;