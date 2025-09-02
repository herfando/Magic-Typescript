// ===== Advanced Web APIs =====

// 1) Fetch API
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); // fetch user data
  const user = await response.json();                                           // parse JSON
  console.log("User fetched:", user);                                           // log user
}
fetchUser();

// 2) LocalStorage API
localStorage.setItem("theme", "dark");               // save key/value
console.log(localStorage.getItem("theme"));          // "dark"
localStorage.removeItem("theme");                    // remove key

// 3) Geolocation API
navigator.geolocation.getCurrentPosition(            // get current position
  (pos) => {
    console.log("Latitude:", pos.coords.latitude);   // print latitude
    console.log("Longitude:", pos.coords.longitude); // print longitude
  },
  (err) => console.error("Error:", err.message)      // handle error
);

// 4) Notification API
if (Notification.permission === "granted") {
  new Notification("Hello from Web API!");           // show notification
} else {
  Notification.requestPermission();                  // ask permission first
}

// 5) Clipboard API
async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);         // copy text
  console.log("Copied:", text);
}
copyToClipboard("TypeScript is awesome!");

// 6) Web Storage vs Session Storage
sessionStorage.setItem("session", "active");         // lasts until tab closed
console.log(sessionStorage.getItem("session"));      // "active"

/*
========================
📑 Short Explanation
========================
- Fetch API → Handles HTTP requests & responses easily.
- LocalStorage → Store key/value data permanently in browser.
- Geolocation → Get user’s current location (requires permission).
- Notification → Push system-level messages to user.
- Clipboard API → Copy/paste text programmatically.
- SessionStorage → Similar to localStorage but clears on tab close.
- Purpose → Provide richer browser interactions and modern app features.
*/
