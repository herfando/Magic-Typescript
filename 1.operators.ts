// ===== Operators =====

// Arithmetic Operators
let a: number = 10;            // a → number
let b: number = 5;             // b → number
let sum: number = a + b;       // + → addition
let diff: number = a - b;      // - → subtraction
let prod: number = a * b;      // * → multiplication
let div: number = a / b;       // / → division
let mod: number = a % b;       // % → modulo

// Comparison Operators
let isEqual: boolean = a === b;    // === strict equality
let isNotEqual: boolean = a !== b; // !== strict inequality
let isGreater: boolean = a > b;    // > greater than
let isLess: boolean = a < b;       // < less than

// Logical Operators
let logicAnd: boolean = a > 0 && b > 0;  // && AND
let logicOr: boolean = a < 0 || b > 0;   // || OR
let logicNot: boolean = !(a === b);      // ! NOT

// Assignment Operators
let c: number = 20;
c += 5;   // c = c + 5
c -= 3;   // c = c - 3
c *= 2;   // c = c * 2
c /= 4;   // c = c / 4

// Ternary Operator
let result: string = a > b ? "A is bigger" : "B is bigger"; // condition ? true : false

// ===== Contoh penggunaan =====
console.log(`Sum: ${sum}, Diff: ${diff}, Prod: ${prod}, Div: ${div}, Mod: ${mod}`);
console.log(`Equal? ${isEqual}, Not Equal? ${isNotEqual}`);
console.log(`Logic AND: ${logicAnd}, OR: ${logicOr}, NOT: ${logicNot}`);
console.log(`Ternary Result: ${result}`);

/*
Keterangan Ringkas:
+ - * / %       → Arithmetic (matematika)
=== !== > <     → Comparison
&& || !         → Logical
+= -= *= /=     → Assignment
condition ? a:b → Ternary (if-else ringkas)
*/
