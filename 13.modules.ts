// ===== Modules in TypeScript =====

// 1. Exporting variables and functions (file: mathUtils.ts)
export const PI: number = 3.14159;

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// 2. Importing (file: 13-modules.ts)
import { PI, add, subtract } from "./mathUtils";

console.log("PI =", PI);                 // 3.14159
console.log("Add =", add(5, 3));         // 8
console.log("Subtract =", subtract(5,3));// 2

// 3. Default export (file: logger.ts)
export default function logMessage(msg: string): void {
    console.log("Log:", msg);
}

// 4. Import default
import logMessage from "./logger";
logMessage("Modules are working!");

// 5. Re-export (file: index.ts)
export * from "./mathUtils";
export { default as Logger } from "./logger";

/*
Short Explanation:
- export → Share variables/functions/classes between files
- import → Bring code from another file
- default export → One main export per file
- re-export → Combine multiple modules in one entry point
*/
