// ===== Type Aliases =====

// 1. Basic alias
type UserID = number;                  // Alias for number
let id: UserID = 123;                  // Variable with alias type
console.log("User ID:", id);           // Output: 123

// 2. Alias for object
type User = {                          // Object alias definition
  id: number;                          // Property id is number
  name: string;                        // Property name is string
  isActive: boolean;                   // Property isActive is boolean
};  
const user1: User = { id: 1, name: "Alice", isActive: true }; // Object with alias
console.log("User object:", user1);    // Output: { id: 1, name: "Alice", isActive: true }

// 3. Alias with union type
type Status = "success" | "error" | "loading";  // Alias for union string literals
let state: Status = "success";                  // Variable must be one of union values
console.log("State:", state);                   // Output: success

// 4. Alias with function type
type AddFn = (a: number, b: number) => number;  // Alias for function signature
const add: AddFn = (x, y) => x + y;             // Function with alias type
console.log("Addition:", add(5, 7));            // Output: 12

// 5. Alias with array
type StringArray = string[];                    // Alias for array of strings
const fruits: StringArray = ["apple", "banana", "orange"]; // String array
console.log("Fruits:", fruits);                 // Output: ["apple", "banana", "orange"]

/*
Short Explanation:
- Type aliases give custom names to types.
- Useful for readability and reuse.
- Can be used for primitives, objects, arrays, unions, and functions.
- Makes code cleaner and easier to maintain.
*/
