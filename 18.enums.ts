// ===== Enums =====

// 1. Numeric Enum (default starts from 0)
enum Direction {
  Up,       // 0
  Down,     // 1
  Left,     // 2
  Right     // 3
}
console.log(Direction.Up);       // 0
console.log(Direction[2]);       // "Left"

// 2. Custom Numeric Enum
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}
console.log(Status.Success);     // 200
console.log(Status[404]);        // "NotFound"

// 3. String Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
console.log(Role.Admin);         // "ADMIN"

// 4. Enum in function
function respond(status: Status): void {
  if (status === Status.Success) {
    console.log("Request successful!");
  } else {
    console.log("Error occurred with status:", status);
  }
}
respond(Status.Success);         // "Request successful!"
respond(Status.NotFound);        // "Error occurred with status: 404"

// 5. Heterogeneous Enum (not recommended, but possible)
enum Mixed {
  Yes = 1,
  No = "NO",
}
console.log(Mixed.Yes);          // 1
console.log(Mixed.No);           // "NO"

/*
Short Explanation:
- Enum = group of related constants.
- Numeric Enums → auto-increment numbers.
- String Enums → fixed readable values.
- Enums make code more readable and type-safe.
- Common usage: roles, directions, status codes.
*/
