const {Sequelize} = require('sequelize');
// const dotenv = require('dotenv');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: require('mysql2'),
});

module.exports = sequelize;