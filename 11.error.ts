// ===== Error Handling =====

// 1. try...catch
try {
    const result = JSON.parse("{ bad json }");
    console.log("Result:", result);
} catch (error) {
    console.error("Parsing error:", error);
}

// 2. throw custom error
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Error caught:", (error as Error).message);
}

// 3. finally
function loadData() {
    try {
        console.log("Loading data...");
        throw new Error("Network error!");
    } catch (error) {
        console.error("Error:", (error as Error).message);
    } finally {
        console.log("Cleanup: closing connection.");
    }
}
loadData();

// 4. Debugging example
function debugExample() {
    console.log("Start debugging...");
    console.assert(2 + 2 === 4, "Math is broken!");
    console.assert(2 + 2 === 5, "Assertion failed: 2+2 is not 5");
    console.log("End debugging.");
}
debugExample();

/*
Short Explanation:
- try...catch → Catch runtime errors
- throw → Create custom errors
- finally → Always runs (cleanup, close connections)
- console.assert → Debugging check for conditions
*/
