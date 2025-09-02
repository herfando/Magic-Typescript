// ===== TypeScript Integration =====

// 1) Typed function
function addNumbers(a: number, b: number): number {    // parameters + return typed
  return a + b;                                        // must return number
}
console.log("Add:", addNumbers(5, 7));                 // 12

// 2) Interfaces
interface User {                                       // define User interface
  id: number;                                         // must be number
  username: string;                                   // must be string
  isActive: boolean;                                  // must be boolean
}

const user1: User = {                                 // object must match interface
  id: 1,                                              // valid
  username: "herfando",                               // valid
  isActive: true,                                     // valid
};
console.log("User:", user1);

// 3) Generics
function identity<T>(value: T): T {                   // generic function
  return value;                                       // returns same type
}
console.log("Generic string:", identity("Hello"));    // string
console.log("Generic number:", identity(123));        // number

// 4) Strong typing in arrays
const scores: number[] = [90, 85, 100];               // typed array (number)
scores.push(95);                                      // valid
// scores.push("oops");                               // ❌ error: must be number
console.log("Scores:", scores);

// 5) Using types in fetch
async function fetchData<T>(url: string): Promise<T> { // generic fetch
  const response = await fetch(url);                  // fetch request
  return response.json() as Promise<T>;               // cast response to T
}

interface Post {                                      // define Post interface
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Example fetch
fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Post fetched:", data)); // log post data

/*
========================
📑 Short Explanation
========================
- Typed function → ensures input & output types are correct.
- Interfaces → blueprint for object structure.
- Generics → reusable and type-safe code for multiple data types.
- Strong typing in arrays → prevents invalid values in collections.
- Typed fetch → guarantees API response matches expected interface.
- Purpose → leverage TypeScript for safer, more maintainable JavaScript.
*/
