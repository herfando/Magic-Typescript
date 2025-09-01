// ===== ES6+ Features =====

// 1. Template literals
const name: string = "Herfando";
const age: number = 25;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// 2. Destructuring
const user = { id: 1, username: "herfando", role: "admin" };
const { id, username } = user;
console.log(id, username);

// 3. Array destructuring
const colors: string[] = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first, second);

// 4. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

// 5. Rest operator
function sum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// 6. Default parameters
function greetUser(user: string = "Guest"): string {
    return `Welcome, ${user}!`;
}
console.log(greetUser());
console.log(greetUser("Herfando"));

// 7. let & const (block scope)
let counter: number = 0;
const PI: number = 3.14;
counter++;
console.log(counter, PI);

/*
Short Explanation:
- Template literals → embed variables easily with backticks
- Destructuring → extract values from objects/arrays
- Spread (...) → copy/merge arrays & objects
- Rest (...) → collect multiple args into array
- Default parameters → function fallback values
- let & const → block-scoped variables
*/
