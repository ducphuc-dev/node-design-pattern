// Concrete strategies
export class CreditCardStrategy implements PaymentStrategy {
    execute(amount: number): void {
        console.log(`Paying ${amount} using credit card`);
    }
}

// Concrete strategies
export class PayPalStrategy implements PaymentStrategy {
    execute(amount: number): void {
        console.log(`Paying ${amount} using PayPal`);
    }
}