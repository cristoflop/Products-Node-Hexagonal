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
    const name = req.body.name.trim();
    const description = req.body.description;

    const product = await Product.findOne({where: {name}});
    if (product != null) {
        res.status(409);
        res.json({message: "Product already exists"});
        return;
    }

    const insertedProduct = await Product.create({
        name: name,
        description: description
    });

    res.status(201);
    res.json(mapper(insertedProduct));
}

async function find(req, res) {
    await sequelize.sync();
    const id = req.params.id;

    const product = await Product.findOne({where: {id}});
    if (product == null) {
        res.status(404);
        res.json({message: "Product doesn't exist"});
        return;
    }

    res.status(200);
    res.json(mapper(product));
}

async function remove(req, res) {
    await sequelize.sync();
    const id = req.params.id;

    const product = await Product.findOne({where: {id}});
    if (product == null) {
        res.status(404);
        res.json({message: "Product doesn't exist"});
        return;
    }

    await Product.destroy({where: {id}});

    res.status(204);
    res.json({message: "Product successfully removed"});
}

module.exports = {
    findAll,
    save,
    find,
    remove
}