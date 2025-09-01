// ===== Advanced Arrays & Objects =====

// 1. Array.map() → transform each item
const numbers: number[] = [1, 2, 3, 4];
const doubled: number[] = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8]

// 2. Array.filter() → filter by condition
const evens: number[] = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// 3. Array.reduce() → accumulate values
const sum: number = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 10

// 4. Array.find() → find first matching element
const firstEven: number | undefined = numbers.find(num => num % 2 === 0);
console.log("First even:", firstEven); // 2

// 5. Object.keys() → get all keys
const person = { name: "Alice", age: 25, city: "Jakarta" };
const keys: string[] = Object.keys(person);
console.log("Keys:", keys); // ["name", "age", "city"]

// 6. Object.values() → get all values
const values: (string | number)[] = Object.values(person);
console.log("Values:", values); // ["Alice", 25, "Jakarta"]

// 7. Object.entries() → get key-value pairs
const entries: [string, string | number][] = Object.entries(person);
console.log("Entries:", entries); 
// [["name", "Alice"], ["age", 25], ["city", "Jakarta"]]

// 8. Object destructuring
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`); // Name: Alice, Age: 25

// 9. Spread operator → clone/merge objects
const updatedPerson = { ...person, country: "Indonesia" };
console.log("Updated Person:", updatedPerson);
// { name: "Alice", age: 25, city: "Jakarta", country: "Indonesia" }

// 10. Rest operator → pick remaining props
const { city, ...rest } = person;
console.log("Without city:", rest); // { name: "Alice", age: 25 }

/*
Short Explanation:
- map() → transform elements
- filter() → keep elements by condition
- reduce() → accumulate values into one
- find() → find first match
- Object.keys() → extract keys
- Object.values() → extract values
- Object.entries() → extract key-value pairs
- Destructuring → easy extraction from objects
- Spread → clone/merge objects
- Rest → exclude certain properties
*/
