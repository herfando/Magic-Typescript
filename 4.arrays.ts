// ===== Arrays =====

// Number array
let numbers: number[] = [1, 2, 3, 4, 5];  // array of numbers

// String array
let names: string[] = ["Alice", "Bob", "Charlie"]; // array of strings

// Boolean array
let flags: boolean[] = [true, false, true]; // array of booleans

// Mixed type array (tuple)
let tuple: [string, number] = ["Age", 25]; // fixed-length tuple

// Array methods
numbers.push(6);          // add element to end
numbers.pop();            // remove last element
names.unshift("Zara");    // add element to start
names.shift();            // remove first element
let sliced = numbers.slice(1, 3); // slice array from index 1 to 2
let joined = names.join(", ");    // join array to string

// Iteration
numbers.forEach((num) => console.log(`Number: ${num}`));
for (let i = 0; i < names.length; i++) {
    console.log(`Name[${i}]: ${names[i]}`);
}

// Map & Filter
let doubled = numbers.map((n) => n * 2);       // map to double each number
let evens = numbers.filter((n) => n % 2 === 0); // filter even numbers

// ===== Example Usage =====
console.log(`Numbers: ${numbers}`);
console.log(`Names: ${names}`);
console.log(`Tuple: ${tuple[0]} = ${tuple[1]}`);
console.log(`Sliced: ${sliced}`);
console.log(`Joined: ${joined}`);
console.log(`Doubled: ${doubled}`);
console.log(`Evens: ${evens}`);

/*
Short Explanation:
type[] → declare array of specific type
[number, string] → tuple with fixed types
push/pop → add/remove from end
unshift/shift → add/remove from start
slice → get subarray
join → convert array to string
forEach → iterate array
map → transform array elements
filter → select elements based on condition
*/
