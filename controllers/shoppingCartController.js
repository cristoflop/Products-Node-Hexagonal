"use strict"

const ShoppingCart = require("../domain/shoppingCart");
const sequelize = require("../sequelize");
const mapper = require("../utils/mapper").mapShoppingCartToDto;

async function findAll(req, res) {
    await sequelize.sync();
    const carts = await ShoppingCart.findAll();
    res.status(200);
    res.json(carts.map(cart => mapper(cart)));
}

async function save(req, res) {
    await sequelize.sync();

}

async function patch(req, res) {

}

async function find(req, res) {

}

async function remove(req, res) {

}

async function addProductToCart(req, res) {

}

async function removeProductFromCart(req, res) {

}

module.exports = {
    save,
    patch,
    find,
    remove,
    addProductToCart,
    removeProductFromCart
}