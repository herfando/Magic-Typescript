// ===== LocalStorage & SessionStorage (Typed Utility) =====

// Type-safe helper for LocalStorage
function setLocal<T>(key: string, value: T): void {                       // save to localStorage
  localStorage.setItem(key, JSON.stringify(value));                       // stringify before saving
}

function getLocal<T>(key: string): T | null {                             // read from localStorage
  const raw: string | null = localStorage.getItem(key);                   // get raw string
  return raw ? (JSON.parse(raw) as T) : null;                             // parse if exists
}

function removeLocal(key: string): void {                                 // remove by key
  localStorage.removeItem(key);                                           // delete item
}

function clearLocal(): void {                                             // clear all keys
  localStorage.clear();                                                   // wipe localStorage
}

// Type-safe helper for SessionStorage
function setSession<T>(key: string, value: T): void {                     // save to sessionStorage
  sessionStorage.setItem(key, JSON.stringify(value));                     // stringify before saving
}

function getSession<T>(key: string): T | null {                           // read from sessionStorage
  const raw: string | null = sessionStorage.getItem(key);                 // get raw string
  return raw ? (JSON.parse(raw) as T) : null;                             // parse if exists
}

function removeSession(key: string): void {                               // remove by key
  sessionStorage.removeItem(key);                                         // delete item
}

function clearSession(): void {                                           // clear all keys
  sessionStorage.clear();                                                 // wipe sessionStorage
}

// Example model
interface UserProfile {                                                   // typed user profile
  username: string;                                                       // username field
  token: string;                                                          // auth token
  lastLogin: Date;                                                        // last login date
}

// Demo usage
const user: UserProfile = {                                               // create dummy user
  username: "herfando",                                                   // username
  token: "abc123",                                                        // token
  lastLogin: new Date(),                                                  // now
};

setLocal<UserProfile>("user", user);                                      // save user to localStorage
const storedUser = getLocal<UserProfile>("user");                         // read back typed user
console.log("Stored user:", storedUser);                                  // log result

setSession<string>("theme", "dark");                                      // save theme in sessionStorage
console.log("Theme:", getSession<string>("theme"));                       // read typed theme

/*
========================
📑 Short Explanation
========================
- localStorage: persists data until manually cleared (browser restart safe).
- sessionStorage: persists only during tab session (clears when tab closes).
- setLocal<T> / getLocal<T> make storage type-safe with generics.
- Always JSON.stringify on save and JSON.parse on load.
- clearLocal() / clearSession() wipe all data.
*/
