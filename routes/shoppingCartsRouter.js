"use strict"

const express = require("express");
const shoppingCartsRouter = express.Router();
const shoppingCartsController = require("../controllers/shoppingCartController");

shoppingCartsRouter.get("/shoppingcarts", shoppingCartsController.findAll);

shoppingCartsRouter.get("/shoppingcarts/:id", shoppingCartsController.find);
shoppingCartsRouter.delete("/shoppingcarts/:id", shoppingCartsController.remove);

module.exports = shoppingCartsRouter;