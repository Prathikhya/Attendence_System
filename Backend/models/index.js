const sequelize = require('../config/db');
const User = require('./user.model');
const Attendance = require('./attendance.model');

sequelize.sync(); // { force: true } for reset (dev only)

module.exports = { sequelize, User, Attendance };
