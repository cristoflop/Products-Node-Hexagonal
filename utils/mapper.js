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
        status: shoppingCart.status
    }
}

module.exports = {
    mapProductToDto,
    mapShoppingCartToDto
}