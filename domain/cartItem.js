"use strict"

"use strict"

const {Model, DataTypes} = require('sequelize');
const sequelize = require("../sequelize");

class CartItem extends Model {
}

CartItem.init({
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'cartItem'
});

module.exports = CartItem;