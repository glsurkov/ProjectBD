const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user',{
        user_id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        contact_number:{
            type:Sequelize.STRING,
        },
        username:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        role:{
            type:Sequelize.STRING,
            allowNull:false,
            defaultValue:'user'
        },
        balance:{
            type:Sequelize.INTEGER,
            allowNull:false,
            defaultValue:0,
            validate:{
                min:0
            }
        }
    },
    {
        timestamps:false
    })

module.exports = User