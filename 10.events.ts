// ===== Event Listeners =====

// Get element safely with type assertion
const button = document.getElementById("myBtn") as HTMLButtonElement;
const input = document.getElementById("myInput") as HTMLInputElement;

// 1. Click Event
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// 2. Keypress Event
input.addEventListener("keypress", (event: KeyboardEvent) => {
    console.log("Key pressed:", event.key);
});

// 3. Mouseover Event
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "lightblue";
});

// 4. Event Delegation
const list = document.getElementById("myList");
list?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "LI") {
        console.log("List item clicked:", target.textContent);
    }
});

// 5. Removing Event Listener
function onClick() {
    console.log("This will be removed.");
}
button.addEventListener("click", onClick);
button.removeEventListener("click", onClick);

/*
Short Explanation:
- click → Runs function when button is clicked
- keypress → Detects key typed in input
- mouseover → Runs function when cursor hovers
- delegation → Handles multiple children via parent
- removeEventListener → Stops event listening
*/
