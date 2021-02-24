"use strict"

function mapProductToDto(product) {
    return {
        name: product.name,
        description: product.description
    }
}

module.exports = {
    mapProductToDto
}