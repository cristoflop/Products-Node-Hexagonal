"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");

class ShoppingCart extends Model {
}

ShoppingCart.init({
    status: DataTypes.ENUM("completed", "in-progress")
}, {
    sequelize,
    modelName: 'shoppingCart'
});

module.exports = ShoppingCart;