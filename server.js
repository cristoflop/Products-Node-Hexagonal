"use strict"

const express = require('express');
const logger = require('morgan');
const config = require("./config");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// declare routers
const productsRouter = require("./routes/productsRouter");
const shoppingCartsRouter = require("./routes/shoppingCartsRouter");

app.use(logger(config.logging));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// routers use
app.use("/api", productsRouter);
app.use("/api", shoppingCartsRouter);

app.use(middlewareNotFound);
app.use(middlewareServerError);

function middlewareNotFound(request, response) {
    response.status(404);
    response.json({
        message: `${request.url} not found`
    });
}

function middlewareServerError(error, request, response, next) {
    response.status(500);
    response.json(error);
}

app.listen(config.port, err => {
    if (err)
        console.error(`No se ha podido iniciar el servidor: ${err.message}`);
    else
        console.log(`Servidor arrancado en el puerto ${config.port}`);
});
