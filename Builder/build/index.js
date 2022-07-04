Object.defineProperty(exports, "__esModule", { value: true });
const ProductBuilder_1 = require("./ProductBuilder");
const ProductDirector_1 = require("./ProductDirector");
const builder = new ProductBuilder_1.ProductBuilder();
const director = new ProductDirector_1.ProductDirector(builder);
const product = director.buildNormalProduct({
    name: "Product Name",
    description: "Product Description",
    price: 50000
});
const variantProduct = director.buildVariantProduct({
    name: "Product Variant Name",
    description: "Product Variant Description",
    price: 50000,
    variants: [{
            name: "V1",
            price: 500000
        }]
});
console.log("Product: ", product, variantProduct);
