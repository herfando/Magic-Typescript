// ===== Design Patterns in TypeScript =====

// 1. Singleton Pattern
class Database {
  private static instance: Database;                        // static instance
  private constructor() {                                   // private constructor
    console.log("New Database Connection Created");
  }

  static getInstance(): Database {                          // global access point
    if (!Database.instance) {
      Database.instance = new Database();                   // create only once
    }
    return Database.instance;
  }

  query(sql: string): void {
    console.log(`Executing SQL: ${sql}`);
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2);                                   // true (same instance)


// 2. Module Pattern (using namespace in TS)
namespace MathModule {
  export function add(a: number, b: number): number {
    return a + b;
  }
  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

// Usage
console.log(MathModule.add(10, 5));                         // 15
console.log(MathModule.subtract(10, 5));                    // 5


// 3. Revealing Module Pattern
const UserModule = (() => {
  let users: string[] = [];                                 // private variable

  function addUser(name: string): void {
    users.push(name);
    console.log(`${name} added.`);
  }

  function listUsers(): string[] {
    return [...users];                                      // return copy
  }

  return {
    addUser,                                                // reveal public methods
    listUsers
  };
})();

// Usage
UserModule.addUser("Alice");
UserModule.addUser("Bob");
console.log(UserModule.listUsers());                        // ["Alice", "Bob"]


/*
========================
📑 Short Explanation
========================
- Singleton → memastikan hanya ada 1 instance dari class.
- Module Pattern → gunakan namespace untuk mengelompokkan fungsi.
- Revealing Module → gunakan IIFE untuk menjaga data tetap private, expose fungsi publik.
- Semua design pattern ini membantu struktur kode agar lebih maintainable & reusable.
*/
