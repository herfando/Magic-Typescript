// ===== Functions =====

// Function declaration
function greet(name: string): string {        // name → parameter of type string
    return `Hello, ${name}!`;                // returns a string
}

// Function expression
const add = function(a: number, b: number): number {  // a,b → parameters of type number
    return a + b;                                    // returns a number
};

// Arrow function
const multiply = (x: number, y: number): number => x * y; // concise arrow function

// Function with optional parameter
function welcome(name: string, title?: string): string { // title is optional
    return title ? `Welcome, ${title} ${name}!` : `Welcome, ${name}!`;
}

// Function with default parameter
function power(base: number, exponent: number = 2): number { // exponent defaults to 2
    return Math.pow(base, exponent);
}

// ===== Example Usage =====
console.log(greet("Herfando"));               // Hello, Herfando!
console.log(add(5, 10));                      // 15
console.log(multiply(3, 4));                  // 12
console.log(welcome("Alice"));                // Welcome, Alice!
console.log(welcome("Alice", "Dr."));         // Welcome, Dr. Alice!
console.log(power(5));                        // 25
console.log(power(2, 3));                     // 8

/*
Short Explanation:
function name(params: type): returnType → declare a function with typed parameters and return type
const func = function(...) → function expression
const arrowFunc = (...) => ... → arrow function
? → optional parameter
parameter = value → default parameter
*/
