// ===== DOM Manipulation =====

// Get element by ID (typed as HTMLElement or null)
const heading = document.getElementById("title") as HTMLHeadingElement;
heading.textContent = "Hello from TypeScript!";

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added via TypeScript.";

// Append to body
document.body.appendChild(newParagraph);

// Remove element (if exists)
const oldElement = document.getElementById("old");
if (oldElement) {
    oldElement.remove();
}

// Add event listener
const button = document.getElementById("btn") as HTMLButtonElement;
button.addEventListener("click", () => {
    alert("Button clicked!");
});

// Example with input
const inputBox = document.getElementById("nameInput") as HTMLInputElement;
button.addEventListener("click", () => {
    console.log(`You typed: ${inputBox.value}`);
});

/*
Short Explanation:
- getElementById → select element (typed as specific HTML element)
- createElement → make new DOM node
- appendChild → add to document
- remove() → delete element
- addEventListener → listen for events
- type assertions (as HTMLButtonElement, HTMLInputElement) → ensure correct typing
*/
