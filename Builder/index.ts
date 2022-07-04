import { ProductBuilder } from "./ProductBuilder";
import { ProductDirector } from "./ProductDirector";

const builder = new ProductBuilder()
const director = new ProductDirector(builder)
const product = director.buildNormalProduct({
    name: "Product Name",
    description: "Product Description",
    price: 50000
})
const variantProduct = director.buildVariantProduct({
    name: "Product Variant Name",
    description: "Product Variant Description",
    price: 50000,
    variants: [{
        name: "V1",
        price: 500000
    }]
})
console.log("Product: ", product, variantProduct);
