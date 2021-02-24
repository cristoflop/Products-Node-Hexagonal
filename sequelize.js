"use strict"

const config = require("./config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.dbConfig.database,
    config.dbConfig.user,
    config.dbConfig.password,
    {
        host: config.dbConfig.host,
        dialect: "mysql"
    });

module.exports = sequelize;