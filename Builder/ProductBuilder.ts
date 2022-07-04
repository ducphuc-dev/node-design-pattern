import { Product } from "./Product";

export interface IProductBuilder {
    buildName,
    buildPrice,
    buildDescription,
    buildVariant?
}

export class ProductBuilder implements IProductBuilder {
    private name:string;
    private description:string;
    private price:Number;
    private variants:Array<any>

    buildName(name) {
        this.name = name;
        return this;
    }

    buildPrice(price) {
        this.price = price;
        return this;
    }

    buildDescription (description) {
        this.description = description;
        return this;
    }

    buildVariant(variants) {
        this.variants = variants;
        return this;
    }

    build() {
        return new Product(this).getData();
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
        }
    }
}