"use strict"

const Product = require("../domain/product");
const sequelize = require("../sequelize");
const mapper = require("../utils/mapper").mapProductToDto

async function findAll(req, res) {
    await sequelize.sync();
    const products = await Product.findAll();
    res.status(200);
    res.json(products.map(product => mapper(product)));
}

async function save(req, res) {
    await sequelize.sync();
    const product = await Product.create({
        name: req.body.name,
        description: req.body.description
    });
    res.json(product);
    res.status(201);
}

module.exports = {
    findAll,
    save
}