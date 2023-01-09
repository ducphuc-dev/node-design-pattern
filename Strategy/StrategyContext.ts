// Context
export class ShoppingCart {
    private items: { name: string; price: number }[] = [];

    addItem(item: { name: string; price: number }): void {
        this.items.push(item);
    }

    removeItem(item: { name: string; price: number }): void {
        this.items = this.items.filter(i => i !== item);
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    pay(paymentMethod: PaymentStrategy): void {
        const amount = this.getTotal();
        paymentMethod.execute(amount);
    }
}
