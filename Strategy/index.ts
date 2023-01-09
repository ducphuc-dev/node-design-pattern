import { CreditCardStrategy, PayPalStrategy } from "./StrategyConcrete";
import { ShoppingCart } from "./StrategyContext";

const cart = new ShoppingCart();
cart.addItem({ name: 'item 1', price: 100 });
cart.addItem({ name: 'item 2', price: 50 });

cart.pay(new CreditCardStrategy());  // Paying 150 using Credit card
cart.pay(new PayPalStrategy());  // Paying 150 using PayPal