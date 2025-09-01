// ===== Security & Best Practices =====

// 1) XSS prevention: escaping user input
function escapeHTML(str: string): string {                   // sanitize input
  return str.replace(/&/g, "&amp;")                         // escape &
            .replace(/</g, "&lt;")                          // escape <
            .replace(/>/g, "&gt;")                          // escape >
            .replace(/"/g, "&quot;")                        // escape "
            .replace(/'/g, "&#039;");                       // escape '
}

const userInput = '<script>alert("XSS")</script>';          // malicious input
const safeInput = escapeHTML(userInput);                   // sanitized input
console.log("Escaped input:", safeInput);                  // safe to render

// 2) Input validation example
function isValidUsername(name: string): boolean {           // validate username
  const regex = /^[a-zA-Z0-9_]{3,20}$/;                    // only alphanumeric + underscore, 3-20 chars
  return regex.test(name);                                  // return boolean
}

console.log("Valid?", isValidUsername("User_123"));        // true
console.log("Valid?", isValidUsername("Invalid!Name"));    // false

// 3) Content Security Policy (CSP) setup (example)
const cspMeta = document.createElement("meta");             // create meta tag
cspMeta.httpEquiv = "Content-Security-Policy";             // set CSP header
cspMeta.content = "default-src 'self'; script-src 'self';"; // allow scripts only from self
document.head.appendChild(cspMeta);                        // append to head

// 4) HTTPS enforcement example
if (location.protocol !== "https:") {                       // check protocol
  location.href = "https:" + window.location.href.substring(window.location.protocol.length); // redirect to https
}

/*
========================
📑 Short Explanation
========================
- escapeHTML → sanitize input to prevent XSS attacks.
- Input validation → ensure data meets expected format before processing.
- Content Security Policy (CSP) → restricts sources for scripts/styles to improve security.
- HTTPS enforcement → ensures secure communication over network.
- Purpose → protect web apps from common vulnerabilities and follow best practices.
*/
