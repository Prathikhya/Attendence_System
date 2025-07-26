const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model');

const Attendance = sequelize.define('Attendance', {
  date: DataTypes.DATEONLY,
  checkIn: DataTypes.TIME,
  checkOut: DataTypes.TIME,
});

User.hasMany(Attendance);
Attendance.belongsTo(User);

module.exports = Attendance;
