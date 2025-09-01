// ===== Classes =====

// 1. Basic class
class Person {                           // Define class Person
  name: string;                          // Property name is string
  age: number;                           // Property age is number

  constructor(name: string, age: number) { // Constructor to initialize properties
    this.name = name;                    // Assign parameter to property
    this.age = age;                      // Assign parameter to property
  }

  greet(): void {                        // Method greet (no return value)
    console.log(`Hello, my name is ${this.name}`); // Print greeting
  }
}
const p1 = new Person("Alice", 25);      // Create new Person object
p1.greet();                              // Output: Hello, my name is Alice

// 2. Inheritance
class Animal {                           // Base class Animal
  constructor(public name: string) {}    // Public property initialized in constructor
  move(): void {                         // Method move
    console.log(`${this.name} is moving`); // Print action
  }
}
class Dog extends Animal {               // Dog extends Animal
  bark(): void {                         // Additional method bark
    console.log(`${this.name} is barking`); // Print bark
  }
}
const d1 = new Dog("Buddy");             // Create Dog object
d1.move();                               // Output: Buddy is moving
d1.bark();                               // Output: Buddy is barking

// 3. Access modifiers
class Car {                              // Class Car
  public brand: string;                  // Public property (accessible anywhere)
  private speed: number;                 // Private property (inside class only)
  protected color: string;               // Protected property (class + subclasses)

  constructor(brand: string, color: string) {
    this.brand = brand;                  // Assign brand
    this.speed = 0;                      // Initialize speed to 0
    this.color = color;                  // Assign color
  }

  accelerate(amount: number): void {     // Method to increase speed
    this.speed += amount;                // Increase private speed
    console.log(`${this.brand} accelerated to ${this.speed} km/h`); // Print speed
  }
}
const car1 = new Car("Toyota", "Red");   // Create Car object
car1.accelerate(50);                     // Output: Toyota accelerated to 50 km/h

// 4. Getters and Setters
class Rectangle {                        // Class Rectangle
  constructor(private width: number, private height: number) {} // Private props

  get area(): number {                   // Getter for area
    return this.width * this.height;     // Calculate area
  }

  set setWidth(value: number) {          // Setter for width
    if (value > 0) this.width = value;   // Only allow positive values
  }
}
const rect = new Rectangle(10, 5);       // Create Rectangle object
console.log("Area:", rect.area);         // Output: 50
rect.setWidth = 20;                      // Update width
console.log("Updated Area:", rect.area); // Output: 100

/*
Short Explanation:
- Classes = blueprint for objects.
- Constructor initializes object properties.
- Inheritance allows child classes to extend parent class.
- Access modifiers: public, private, protected control access level.
- Getters/Setters provide controlled access to properties.
*/
