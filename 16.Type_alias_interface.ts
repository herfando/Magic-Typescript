// ===== Type Aliases & Interfaces =====

// 1. Type Alias → create a new name for a type
type UserID = number;                  // UserID → alias for number
let id: UserID = 101;                  // id must be a number

// 2. Type Alias for Object
type User = {                          // User → alias for object type
  id: number;                          // id → number
  name: string;                        // name → string
  active: boolean;                     // active → boolean
};

const user1: User = {                  // user1 must follow User type
  id: 1,
  name: "Alice",
  active: true,
};

// 3. Interface → similar to type alias for objects
interface Product {                    // Product → object structure
  id: number;                          // id → number
  title: string;                       // title → string
  price: number;                       // price → number
}

const item: Product = {                // item must follow Product interface
  id: 101,
  title: "Laptop",
  price: 1500,
};

// 4. Interface with optional property
interface Profile {
  username: string;                    // required
  email?: string;                      // optional (may exist or not)
}

const p1: Profile = { username: "andi" };              // valid without email
const p2: Profile = { username: "budi", email: "budi@mail.com" }; // valid with email

// 5. Interface inheritance (extends)
interface Animal {
  name: string;
}
interface Dog extends Animal {         // Dog inherits from Animal
  breed: string;                       // additional property
}
const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

/*
Short Explanation:
- type → defines a new alias name for a type (primitive, union, object).
- interface → defines the structure of an object (properties, methods).
- Optional (?) → property may or may not exist.
- extends → interface can be inherited/extended.
- Key difference → type is more flexible (works with union, primitives), 
                   interface is mainly for object structure.
*/
