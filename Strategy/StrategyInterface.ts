// Strategy interface
interface PaymentStrategy {
    execute(amount: number): void;
}