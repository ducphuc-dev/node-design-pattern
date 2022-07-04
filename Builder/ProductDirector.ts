import { IProductBuilder } from "./ProductBuilder"

interface INormalProduct {
    name:string, description:string, price:Number
}

interface IVariantProduct {
    name:string, description:string, price:Number, 
    variants: Array<any>
}

export class ProductDirector {
    private _builder: IProductBuilder

    constructor(builder:IProductBuilder) {
        this._builder = builder
    }

    buildNormalProduct(product: INormalProduct) {
        return this._builder
            .buildName(product.name)
            .buildDescription(product.description)
            .buildPrice(product.price)
            .build()
    }

    buildVariantProduct(product: IVariantProduct) {
        return this._builder
            .buildName(product.name)
            .buildDescription(product.description)
            .buildPrice(product.price)
            .buildVariant(product.variants)
            .build()
    }
}