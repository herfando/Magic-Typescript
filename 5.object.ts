// ===== Objects =====

// Object with typed properties
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person: Person = {
    name: "Alice",
    age: 25,
    isStudent: false
};

// Access properties
console.log(person.name);  // "Alice"
console.log(person.age);   // 25

// Update property
person.age = 26;

// Destructuring
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`);

// Object methods
let student = {
    id: 101,
    name: "Bob",
    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
};
console.log(student.greet());

// Built-in Object utilities
console.log(Object.keys(person));     // ["name", "age", "isStudent"]
console.log(Object.values(person));   // ["Alice", 26, false]
console.log(Object.entries(person));  // [["name","Alice"],["age",26],["isStudent",false]]

/*
Short Explanation:
- interface → defines object structure
- { } → object literal with properties
- .property → access property
- destructuring → extract values
- methods → functions inside objects
- Object.keys/values/entries → built-in utilities for objects
*/
