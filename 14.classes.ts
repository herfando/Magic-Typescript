// ===== Classes & OOP in TypeScript =====

// 1. Basic Class
class Person {
    name: string; // property: holds person's name
    age: number;  // property: holds person's age

    constructor(name: string, age: number) { // constructor initializes properties
        this.name = name;
        this.age = age;
    }

    greet(): void { // method: function inside class
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person("John", 30); // create new object
john.greet(); // call method


// 2. Inheritance (extends)
class Student extends Person {
    grade: number; // extra property for student

    constructor(name: string, age: number, grade: number) {
        super(name, age); // call parent constructor
        this.grade = grade;
    }

    study(): void { // new method for child class
        console.log(`${this.name} is studying for grade ${this.grade}.`);
    }
}

const alice = new Student("Alice", 20, 12);
alice.greet(); // inherited method from Person
alice.study(); // child method


// 3. Access Modifiers
class BankAccount {
    public owner: string;      // can be accessed anywhere
    private balance: number;   // only inside class
    protected accountType: string; // inside class + subclass

    constructor(owner: string, balance: number, accountType: string) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
    }

    deposit(amount: number): void { // method to add money
        this.balance += amount;
        console.log(`Deposited ${amount}. Current balance: ${this.balance}`);
    }

    getBalance(): number { // safe way to read private value
        return this.balance;
    }
}

const account = new BankAccount("Bob", 1000, "Savings");
account.deposit(500); // add money
console.log(account.getBalance()); // 1500
// console.log(account.balance); // ❌ ERROR: private property


/*
========================
📑 Short Explanation
========================
- Class → Blueprint for objects.
- Constructor → Runs when object created.
- Property → Data inside class.
- Method → Function inside class.
- Inheritance (extends) → Child uses parent’s features.
- super() → Call parent constructor.
- Access Modifiers:
  • public → free access
  • private → inside class only
  • protected → class + subclasses
*/
