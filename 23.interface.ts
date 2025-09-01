// ===== Interfaces =====

// 1. Basic interface
interface Person {                      // Interface definition
  name: string;                         // Property name is string
  age: number;                          // Property age is number
}
const p1: Person = { name: "John", age: 30 }; // Object using interface
console.log("Person:", p1);             // Output: { name: 'John', age: 30 }

// 2. Optional property
interface Product {                      // Interface definition with optional
  id: number;                           // Property id is number
  name: string;                         // Property name is string
  price?: number;                       // Optional property (may be undefined)
}
const prod1: Product = { id: 1, name: "Laptop" }; // Object without price
console.log("Product:", prod1);         // Output: { id: 1, name: 'Laptop' }

// 3. Readonly property
interface Car {                          // Interface with readonly property
  readonly brand: string;               // Cannot be changed after assignment
  model: string;                        // Property model is string
}
const car1: Car = { brand: "Toyota", model: "Corolla" }; // Object with readonly
console.log("Car:", car1);              // Output: { brand: 'Toyota', model: 'Corolla' }

// 4. Interface with function
interface MathOp {                       // Interface for function signature
  (x: number, y: number): number;       // Must take 2 numbers and return number
}
const multiply: MathOp = (a, b) => a * b; // Function implementing interface
console.log("Multiply:", multiply(3, 4)); // Output: 12

// 5. Extending interfaces
interface Animal {                       // Base interface
  name: string;                         // Property name is string
}
interface Dog extends Animal {           // Dog inherits from Animal
  breed: string;                        // Additional property breed
}
const dog1: Dog = { name: "Buddy", breed: "Golden Retriever" }; // Object with both
console.log("Dog:", dog1);              // Output: { name: 'Buddy', breed: 'Golden Retriever' }

/*
Short Explanation:
- Interfaces define object structures (shape).
- Properties can be required, optional (?), or readonly.
- Can define function signatures.
- Interfaces can be extended (inheritance).
- Useful for enforcing consistent object contracts.
*/
