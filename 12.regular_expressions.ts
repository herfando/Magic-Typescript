// ===== Regular Expressions =====

// 1. Basic test
const pattern: RegExp = /hello/i;
console.log(pattern.test("Hello World")); // true

// 2. Match example
const text: string = "Typescript 2025!";
const numbers: RegExpMatchArray | null = text.match(/\d+/);
console.log("Numbers found:", numbers); // ["2025"]

// 3. Replace
const sentence: string = "I like cats, cats are cute!";
const replaced: string = sentence.replace(/cats/g, "dogs");
console.log(replaced); // "I like dogs, dogs are cute!"

// 4. Validate email
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("test@mail.com")); // true
console.log(isValidEmail("wrong-email"));   // false

// 5. Split with regex
const csv: string = "apple,banana,orange";
const fruits: string[] = csv.split(/,\s*/);
console.log(fruits); // ["apple", "banana", "orange"]

/*
Short Explanation:
- test() → Checks if regex matches
- match() → Returns matched parts
- replace() → Replace matched text
- Regex validation → Useful for emails, phone, etc.
- split() with regex → Breaks string by pattern
*/
