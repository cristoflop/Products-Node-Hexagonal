"use strict"

const ShoppingCart = require('../../domain/shoppingCart');
const CartItem = require('../../domain/cartItem');


describe("Test crear carrito", () => {
    it("Se deberia crear un poducto", async () => {
        const mockedCart = {
            id: 1,
            status: "abierto"
        }
        jest.spyOn(ShoppingCart, 'create').mockResolvedValueOnce(mockedCart);

        const cart = await ShoppingCart.create({
            status: "abierto"
        });

        expect(ShoppingCart.create).toBeCalledWith({status: "abierto"});
        expect(cart.status).toBe("abierto");
    });
});

describe("Test añadir producto a un carrito", () => {
    it("Se deberia añadir un poducto a un carrito", async () => {
        const cart_id = 1;
        const prod_id = 1;

        jest.spyOn(CartItem, 'create').mockResolvedValueOnce(true);

        const created = await CartItem.create({
            shoppingCartId: cart_id,
            productId: prod_id,
            quantity: 10
        });

        expect(CartItem.create).toBeCalledWith({
            shoppingCartId: cart_id,
            productId: prod_id,
            quantity: 10
        });
        expect(created).toBe(true);
    });
});