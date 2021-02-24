"use strict"

const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/productsControllers");

productsRouter.get("/products", productsController.findAll);
productsRouter.post("/products", productsController.save);
productsRouter.get("/products/:id", productsController.find);
productsRouter.delete("/products/:id", productsController.remove);

module.exports = productsRouter;