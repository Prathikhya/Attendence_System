const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model');

const Attendance = sequelize.define('Attendance', {
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  checkIn: {
    type: DataTypes.TIME,

  },
  checkOut: {
    type: DataTypes.TIME,
  },
});

User.hasMany(Attendance);
Attendance.belongsTo(User);

module.exports = Attendance;
