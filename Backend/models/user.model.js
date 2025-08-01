const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const User = sequelize.define('User', 
    {
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:  { 
            type: DataTypes.STRING, 
            allowNull: false,            
            unique: true 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'employee'
        }
    });

module.exports = User;
