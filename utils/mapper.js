"use strict"

function mapProductToDto(product) {
    return {
        id: product.id,
        name: product.name,
        description: product.description
    }
}

module.exports = {
    mapProductToDto
}