// ===== Testing & Debugging in TypeScript =====

// 1. console.assert
function divide(a: number, b: number): number {
  console.assert(b !== 0, "Divider cannot be zero!");       // assert check
  return a / b;
}

console.log(divide(10, 2));  // ✅ 5
console.log(divide(10, 0));  // ❌ Assertion failed


// 2. debugger
function calculateArea(length: number, width: number): number {
  debugger;                                                 // stops execution in dev tools
  return length * width;
}

console.log(calculateArea(5, 3));                           // use debugger in browser/Node inspector


// 3. Simple Unit Test (manual style)
function add(a: number, b: number): number {
  return a + b;
}

// Manual test
console.log(add(2, 3) === 5 ? "✅ Test Passed" : "❌ Test Failed");


// 4. Jest/Mocha Style (pseudo example)
// Normally placed in a separate file with Jest or Mocha
/*
describe("add function", () => {
  it("should return 5 when adding 2 + 3", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return 0 when adding -2 + 2", () => {
    expect(add(-2, 2)).toBe(0);
  });
});
*/


/*
========================
📑 Short Explanation
========================
- console.assert → cek kondisi saat runtime, jika false tampilkan error.
- debugger → pause eksekusi, inspect variable di dev tools.
- Manual test → cocok untuk latihan/testing kecil.
- Jest/Mocha → framework testing populer untuk automation & coverage.
*/
