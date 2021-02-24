"use strict"

"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");

class ShoppingCart_Product extends Model {
}

ShoppingCart_Product.init({
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'shoppingCart_product'
});

module.exports = ShoppingCart_Product;