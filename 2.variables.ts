// ===== Variables & Data Types =====

// Mutable variables
let age: number = 25;             // age → number
let nama: string = "Herfando";    // name → string
let isActive: boolean = true;     // isActive → boolean

// Constants (immutable)
const pi: number = 3.14;          // pi → number
const company: string = "OpenAI"; // company → string

// Null & Undefined
let empty: null = null;            // empty → null
let notAssigned: undefined;        // notAssigned → undefined

// Symbol (unique)
let id: symbol = Symbol("id");     // id → unique symbol

// Typed Arrays
let numbers: number[] = [1, 2, 3];          // numbers → array of numbers
let names: string[] = ["Alice", "Bob"];     // names → array of strings

// Typed Object
let person: { name: string; age: number } = { name: "Alice", age: 30 };

// Example usage
console.log(`Name: ${name}, Age: ${age}`);
console.log(`Active? ${isActive}`);
console.log(`PI: ${pi}, Company: ${company}`);
console.log(`Empty: ${empty}, NotAssigned: ${notAssigned}`);
console.log(`Symbol ID: ${id.toString()}`);
console.log(`Numbers: ${numbers}, Names: ${names}`);
console.log(`Person: ${person.name}, Age: ${person.age}`);

/*
Short Explanation:
let → mutable variable
const → constant variable (cannot be changed)
boolean → true/false
null → explicitly empty
undefined → variable not assigned
symbol → unique value, usually for IDs
Array → type followed by [] e.g. number[]
Object → define properties with type {key: type, ...}
*/
