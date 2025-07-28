const sequelize = require('../config/db');
const User = require('./user.model');
const Attendance = require('./attendance.model');

sequelize.sync(); 

module.exports = { sequelize, User, Attendance };
