Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
// Context
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
    pay(paymentMethod) {
        const amount = this.getTotal();
        paymentMethod.execute(amount);
    }
}
exports.ShoppingCart = ShoppingCart;
