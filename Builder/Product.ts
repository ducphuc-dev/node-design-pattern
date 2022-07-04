import { ProductBuilder } from "./ProductBuilder";

interface ProductModel {
    name:string,
    description:string,
    price:Number,
    variants?:Array<any>
}

export class Product {
    private product:ProductModel;

    constructor(productBuilder:ProductBuilder) {
        this.product = productBuilder.getFullData();
    }

    getData() {
        return this.product
    }

}