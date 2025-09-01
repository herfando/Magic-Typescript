// ===== Type Assertions =====

// 1. Using "as" syntax
let value: unknown = "Hello World";
let strLength: number = (value as string).length;
console.log("String length:", strLength); // 11

// 2. Using angle bracket syntax
let someValue: unknown = "TypeScript Rocks!";
let length: number = (<string>someValue).length;
console.log("String length:", length); // 18

// 3. Narrowing DOM elements
const inputElement = document.querySelector("input") as HTMLInputElement;
inputElement.value = "Type assertion works!";

// 4. Force casting (not recommended but possible)
let numberValue: unknown = "100";
let forcedNumber: number = (numberValue as unknown) as number;
console.log("Forced number:", forcedNumber); // "100" but treated as number

// 5. Working with APIs (commonly used)
type ApiResponse = { id: number; name: string };
const data = '{"id":1,"name":"Alice"}';
const parsed = JSON.parse(data) as ApiResponse;
console.log("Parsed:", parsed);

/*
Short Explanation:
- Type assertions tell TypeScript the type when compiler cannot infer it.
- Two forms: "as" syntax and angle bracket <>.
- Commonly used with DOM, JSON, or unknown types.
- Should be used carefully, because wrong assertion can cause runtime errors.
*/
