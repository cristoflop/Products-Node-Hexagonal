"use strict"

function mapProductToDto(product) {
    return {
        id: product.id,
        name: product.name
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
        quantity: cartProduct.cartItem.quantity
    }
}

module.exports = {
    mapProductToDto,
    mapShoppingCartToDto
}