// ===== Union & Intersection Types =====

// 1. Union type → variable can hold more than one type
let value: string | number;           // value can be string OR number
value = "Hello";                      // valid
value = 100;                          // valid

// 2. Union type in function
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase()); // string-specific method
  } else {
    console.log("ID (number):", id.toFixed(2));    // number-specific method
  }
}
printId("abc123");  // ID (string): ABC123
printId(101.5);     // ID (number): 101.50

// 3. Union with arrays
let data: (string | number)[] = ["Alice", 25, "Bob", 30]; 
console.log(data); // ["Alice", 25, "Bob", 30]

// 4. Intersection type → combines multiple types into one
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;       // Staff must have name AND id

const staff1: Staff = {
  name: "John",
  id: 123,
};

// 5. Intersection with extra properties
type Contact = { email: string };
type FullEmployee = Person & Employee & Contact;

const emp: FullEmployee = {
  name: "Lisa",
  id: 45,
  email: "lisa@mail.com",
};

/*
Short Explanation:
- Union (|) → variable can be one of several types.
- Intersection (&) → variable must include all combined types.
- Union = "OR", Intersection = "AND".
- Common usage: flexible function parameters (Union),
                combining models/entities (Intersection).
*/
