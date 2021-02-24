"use strict"

const ShoppingCart = require("../domain/shoppingCart");
const Product = require("../domain/product");
const ShoppingCart_Product = require("../domain/shoppingCart_product");
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
    await sequelize.sync();
    const id = req.params.id;

    const shoppingCart = await ShoppingCart.findOne({where: {id}});
    if (shoppingCart == null) {
        res.status(404);
        res.json({message: "ShoppingCart doesn't exist"});
        return;
    }
    await ShoppingCart.update(
        {status: "completed"},
        {where: {id}}
    );

    res.status(204);
    res.json({message: "ShoppingCart successfully completed"});
}

async function find(req, res) {
    await sequelize.sync();
    const id = req.params.id;

    const shoppingCart = await ShoppingCart.findOne({
        where: {id},
        include: [{model: Product, as: "products"}]
    });
    if (shoppingCart == null) {
        res.status(404);
        res.json({message: "ShoppingCart doesn't exist"});
        return;
    }

    res.status(200);
    res.json(mapper(shoppingCart));
}

async function remove(req, res) {
    await sequelize.sync();
    const id = req.params.id;

    const shoppingCart = await ShoppingCart.findOne({where: {id}});
    if (shoppingCart == null) {
        res.status(404);
        res.json({message: "ShoppingCart doesn't exist"});
        return;
    }
    await ShoppingCart.destroy({where: {id}});

    res.status(204);
    res.json({message: "ShoppingCart successfully removed"});
}

async function addProductToCart(req, res) {
    await sequelize.sync();
    const cart_id = req.params.cart_id;
    const prod_id = req.params.prod_id;
    const quantity = req.params.prod_quantity;

    const shoppingCart = await ShoppingCart.findOne({
        where: {id: cart_id},
        include: [{model: Product, as: "products"}]
    });

    const product = await Product.findOne({where: {id: prod_id}});

    if (shoppingCart == null || product == null) {
        res.status(404);
        res.json({message: "ShoppingCart or Product doesn't exist"});
        return;
    }

    const relation = await ShoppingCart_Product.findOne({
        where: {
            shoppingCartId: cart_id,
            productId: prod_id
        }
    });
    if (relation == null) { // no existe
        await ShoppingCart_Product.create({
            shoppingCartId: cart_id,
            productId: prod_id,
            quantity: quantity
        });
    } else {
        await ShoppingCart_Product.update(
            {quantity: quantity},
            {
                where: {
                    shoppingCartId: cart_id,
                    productId: prod_id
                }
            }
        );
    }

    res.status(204);
    res.json({message: "Product successfully added to ShoppingCart"});
}

async function removeProductFromCart(req, res) {
    await sequelize.sync();
    const cart_id = req.params.cart_id;
    const prod_id = req.params.prod_id;

    await ShoppingCart_Product.destroy({
        where: {
            shoppingCartId: cart_id,
            productId: prod_id
        }
    });

    res.status(204);
    res.json({message: "Product successfully removed"});
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