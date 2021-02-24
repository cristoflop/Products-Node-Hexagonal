"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");
const Product = require("./product");
const CartItem = require("./cartItem");

class ShoppingCart extends Model {
}

ShoppingCart.init({
    status: DataTypes.ENUM("completo", "abierto")
}, {
    sequelize,
    modelName: 'shoppingCart'
});

ShoppingCart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(ShoppingCart, {through: CartItem});

module.exports = ShoppingCart;