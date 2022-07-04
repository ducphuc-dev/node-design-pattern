Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(productBuilder) {
        this.product = productBuilder.getFullData();
    }
    getData() {
        return this.product;
    }
}
exports.Product = Product;
