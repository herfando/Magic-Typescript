// ===== Generics =====

// 1. Generic Function
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(123));   // 123
console.log(identity<string>("Hello")); // "Hello"

// 2. Generic Array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
console.log(getFirst<string>(["apple", "banana", "orange"])); // "apple"

// 3. Generic Interface
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "TypeScript" };
console.log(numberBox, stringBox);

// 4. Generic Class
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}
const stringStorage = new DataStorage<string>();
stringStorage.addItem("Hello");
stringStorage.addItem("World");
console.log(stringStorage.getAll()); // ["Hello", "World"]

// 5. Generic with Constraints
function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}
logLength("Hello");                // Length: 5
logLength([1, 2, 3]);              // Length: 3

/*
Short Explanation:
- Generics allow reusable and type-safe code.
- <T> is a placeholder for any type.
- Functions, classes, and interfaces can use generics.
- Constraints (<T extends ...>) limit what types are allowed.
- Makes code flexible but safe at the same time.
*/
