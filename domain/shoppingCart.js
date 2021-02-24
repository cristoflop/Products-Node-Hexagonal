"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");
const Product = require("./product");
const ShoppingCart_Product = require("./shoppingCart_product");

class ShoppingCart extends Model {
}

ShoppingCart.init({
    status: DataTypes.ENUM("completed", "in-progress")
}, {
    sequelize,
    modelName: 'shoppingCart'
});

ShoppingCart.belongsToMany(Product, {through: ShoppingCart_Product});
Product.belongsToMany(ShoppingCart, {through: ShoppingCart_Product});

module.exports = ShoppingCart;