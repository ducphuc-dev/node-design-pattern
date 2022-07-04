Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBuilder = void 0;
const Product_1 = require("./Product");
class ProductBuilder {
    buildName(name) {
        this.name = name;
        return this;
    }
    buildPrice(price) {
        this.price = price;
        return this;
    }
    buildDescription(description) {
        this.description = description;
        return this;
    }
    buildVariant(variants) {
        this.variants = variants;
        return this;
    }
    build() {
        return new Product_1.Product(this).getData();
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getVariant() {
        return this.variants;
    }
    getFullData() {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
            variants: this.variants
        };
    }
}
exports.ProductBuilder = ProductBuilder;
