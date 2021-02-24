"use strict"

const Product = require('../../domain/product');

describe("Test crear producto", () => {
    it("Se deberia crear un poducto", async () => {
        const mockedProduct = {
            id: 1,
            name: "leche"
        }
        jest.spyOn(Product, 'create').mockResolvedValueOnce(mockedProduct);

        const product = await Product.create({
            id: 1,
            name: "leche"
        });

        expect(Product.create).toBeCalledWith(mockedProduct);
        expect(product.name).toBe("leche");
    });
});

describe("Test borrar producto", () => {
    it("Se deberia borrar un poducto", async () => {
        jest.spyOn(Product, 'destroy').mockResolvedValueOnce(1);

        const affectedRows = await Product.destroy({where: {id: 10}});

        expect(Product.destroy).toBeCalledWith({where: {id: 10}});
        expect(affectedRows).toBe(1);
    });
});