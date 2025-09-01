// ===== Utilities (Helper Functions) =====

// 1. Capitalize first letter
function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("typescript")); // Output: "Typescript"

// 2. Generate random number between min & max
function randomBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 10)); // Example: 7

// 3. Format Date
function formatDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
console.log(formatDate(new Date())); // Output: "2025-9-1"

// 4. Remove duplicates from array
function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

// 5. Sleep / delay function
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demoSleep() {
    console.log("Wait 2 seconds...");
    await sleep(2000);
    console.log("Done!");
}
demoSleep();

/*
Short Explanation:
- capitalize → Makes the first letter uppercase
- randomBetween → Generates random number in range
- formatDate → Converts date into YYYY-MM-DD format
- removeDuplicates → Removes duplicate values in array
- sleep → Pauses execution for X milliseconds
*/
