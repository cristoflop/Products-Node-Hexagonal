"use strict"

"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");
const Product = require("./product");
const ShoppingCart = require("./shoppingCart");

class ShoppingCart_Product extends Model {
}

ShoppingCart_Product.init({
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'shoppingCart_product'
});

Product.belongsToMany(ShoppingCart, {through: ShoppingCart_Product});
ShoppingCart.belongsToMany(Product, {through: ShoppingCart_Product});

module.exports = ShoppingCart_Product;