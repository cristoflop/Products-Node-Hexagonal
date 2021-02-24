"use strict"

function mapProductToDto(product) {
    return {
        id: product.id,
        name: product.name,
        description: product.description
    }
}

function mapShoppingCartToDto(shoppingCart) {
    return {
        id: shoppingCart.id,
        status: shoppingCart.status,
        products: shoppingCart.products.map(product => mapCartProductToDto(product))
    }
}

function mapCartProductToDto(cartProduct) {
    return {
        id: cartProduct.id,
        name: cartProduct.name,
        description: cartProduct.description,
        quantity: cartProduct.shoppingCart_product.quantity
    }
}

module.exports = {
    mapProductToDto,
    mapShoppingCartToDto
}