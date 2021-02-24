"use strict"

const ShoppingCart = require("../domain/shoppingCart");
const Product = require("../domain/product");
const sequelize = require("../sequelize");
const mapper = require("../utils/mapper").mapShoppingCartToDto;

async function findAll(req, res) {
    await sequelize.sync();
    const carts = await ShoppingCart.findAll({include: [{model: Product, as: "products"}]});
    res.status(200);
    res.json(carts.map(cart => mapper(cart)));
}

async function save(req, res) {
    await sequelize.sync();

    const shoppingCart = await ShoppingCart.create({
        status: "in-progress"
    });

    res.status(201);
    res.json(mapper(shoppingCart));
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
    findAll,
    save,
    patch,
    find,
    remove,
    addProductToCart,
    removeProductFromCart
}