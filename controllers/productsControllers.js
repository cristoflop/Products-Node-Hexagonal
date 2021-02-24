"use strict"

const Product = require("../domain/product");

async function findAll(req, res) {
    const products = await Product.findAll();
    res.status(200);
    res.json(products);
}

module.exports = {
    findAll
}