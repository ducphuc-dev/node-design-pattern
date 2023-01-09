Object.defineProperty(exports, "__esModule", { value: true });
const concrete_1 = require("./concrete");
const Strategy_1 = require("./Strategy");
const cart = new Strategy_1.ShoppingCart();
cart.addItem({ name: 'item 1', price: 100 });
cart.addItem({ name: 'item 2', price: 50 });
cart.pay(new concrete_1.CreditCardStrategy()); // Paying 150 using credit card
cart.pay(new concrete_1.PayPalStrategy()); // Paying 150 using PayPal
