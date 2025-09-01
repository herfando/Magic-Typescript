// ===== Type Inference =====

// 1. Variable inference
let message = "Hello TypeScript"; // inferred as string
let count = 42;                   // inferred as number
let isDone = true;                // inferred as boolean

// 2. Function return type inference
function add(a: number, b: number) {
  return a + b; // inferred as number
}
const result = add(5, 10); // result: number

// 3. Array inference
let fruits = ["apple", "banana", "orange"]; 
// inferred as string[]

// 4. Object inference
let user = {
  id: 1,
  name: "Alice",
  isAdmin: false
};
// inferred as { id: number; name: string; isAdmin: boolean; }

// 5. Contextual typing (inference from usage)
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); 
// num is inferred as number

/*
Short Explanation:
- TypeScript automatically infers the type when not explicitly written.
- Variables, functions, arrays, and objects can be inferred.
- Improves readability while keeping type safety.
- Contextual typing → type inferred from usage.
*/
