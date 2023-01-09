## 1. Introduce

The Strategy pattern is a behavioral design pattern that enables an object to change its behavior at runtime. The object's behavior is defined by a specific strategy, which can be changed as needed.

## 2. When to use?

In this example, the ShoppingCart class has a method pay that accepts a payment method. The payment method is an object that implements the PaymentStrategy interface, which has a single method execute. The CreditCardStrategy and PayPalStrategy classes are both implementations of the PaymentStrategy interface, and they define different behaviors for the execute method.

The ShoppingCart class is able to use different payment strategies by passing them to the pay method. This allows the behavior of the pay method to be changed at runtime, depending on the payment strategy being used.

## 3. Architecture

The architecture of the Strategy pattern typically consists of the following components:

1. Strategy interface: This defines the interface for the different strategies. It typically includes a single method that defines the behavior of the strategy.

2. Concrete strategies: These are the classes that implement the strategy interface and provide specific implementations of the behavior defined in the interface.

3. Context: This is the class that uses the strategy. It typically has a field for storing a reference to a strategy object and a method for setting the strategy.

## 4. Advantages & Disadvantages

### 4.1. Advantages

1. It allows you to change the behavior of an object at runtime. With the Strategy pattern, you can change the behavior of an object by simply changing the strategy being used. This is useful when you need to change the behavior of an object based on changing requirements or conditions.

2. It promotes code reuse. By encapsulating different behaviors in separate strategies, you can reuse these behaviors across multiple objects. This can reduce the amount of code you need to write and maintain.

3. It makes your code more flexible and easier to extend. Because the Strategy pattern allows you to easily add new behaviors to your code, it makes it easier to add new features or adapt to changing requirements.

4. It makes your code more flexible and easier to test. The Strategy pattern makes it easy to test different behaviors separately, which can make your code more robust and easier to maintain.

5. It makes your code more readable and easier to understand. By encapsulating complex behaviors in separate strategies, you can make your code more readable and easier to understand. This is especially useful when working with large codebases or teams.

### 4.2. Disadvantages

1. It can increase the number of classes in your codebase. Using the Strategy pattern requires creating a separate strategy class for each behavior you want to encapsulate. This can lead to a larger number of classes in your codebase, which can make it more difficult to navigate and maintain.

2. It can make your code more complex. The Strategy pattern can make your code more complex because it requires you to create multiple classes for each behavior. This can make it more difficult to understand how your code works and make it harder to troubleshoot issues.

3. It may be overkill for simple behaviors. If you only need to change the behavior of an object in a few simple cases, using the Strategy pattern may be unnecessarily complex. In these cases, it may be simpler to just use conditional statements to handle the different behaviors.

4. It may be difficult to implement in some languages. The Strategy pattern relies on inheritance and polymorphism to work, which may not be supported in all programming languages. In these cases, it may be difficult or impossible to use the Strategy pattern.