"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");

class Product extends Model {
}

Product.init({
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: 'product'
});

module.exports = Product;