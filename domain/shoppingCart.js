"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");
const Product = require("./product");

class ShoppingCart extends Model {
}

ShoppingCart.init({
    status: DataTypes.ENUM("completed", "in-progress")
}, {
    sequelize,
    modelName: 'shoppingCart'
});

Product.belongsToMany(ShoppingCart, {through: 'shoppingCart_product'});
ShoppingCart.belongsToMany(Product, {through: 'shoppingCart_product'});

module.exports = ShoppingCart;