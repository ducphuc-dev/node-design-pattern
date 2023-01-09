Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalStrategy = exports.CreditCardStrategy = void 0;
// Concrete strategies
class CreditCardStrategy {
    execute(amount) {
        console.log(`Paying ${amount} using credit card`);
    }
}
exports.CreditCardStrategy = CreditCardStrategy;
// Concrete strategies
class PayPalStrategy {
    execute(amount) {
        console.log(`Paying ${amount} using PayPal`);
    }
}
exports.PayPalStrategy = PayPalStrategy;
