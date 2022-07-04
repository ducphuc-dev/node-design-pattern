Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDirector = void 0;
class ProductDirector {
    constructor(builder) {
        this._builder = builder;
    }
    buildNormalProduct(product) {
        return this._builder
            .buildName(product.name)
            .buildDescription(product.description)
            .buildPrice(product.price)
            .build();
    }
    buildVariantProduct(product) {
        return this._builder
            .buildName(product.name)
            .buildDescription(product.description)
            .buildPrice(product.price)
            .buildVariant(product.variants)
            .build();
    }
}
exports.ProductDirector = ProductDirector;
