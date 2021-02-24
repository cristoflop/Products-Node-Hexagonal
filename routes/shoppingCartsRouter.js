"use strict"

const express = require("express");
const shoppingCartsRouter = express.Router();
const shoppingCartsController = require("../controllers/shoppingCartController");

shoppingCartsRouter.post("/shoppingcarts", shoppingCartsController.save);
shoppingCartsRouter.patch("/shoppingcarts/:id", shoppingCartsController.patch);
shoppingCartsRouter.get("/shoppingcarts/:id", shoppingCartsController.find);
shoppingCartsRouter.delete("/shoppingcarts/:id", shoppingCartsController.remove);
shoppingCartsRouter.post("/shoppingcarts/:cart_id/product/:prod_id/quantity/:prod_quantity", shoppingCartsController.addProductToCart);
shoppingCartsRouter.delete("/shoppingcarts/:cart_id/product/:prod_id", shoppingCartsController.removeProductFromCart);

module.exports = shoppingCartsRouter;