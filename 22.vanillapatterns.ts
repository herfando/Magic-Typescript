// ===== Vanilla JS Patterns =====

// 1) Simple state management pattern
interface State {                     // define state interface
  count: number;                      // count property
}

let state: State = { count: 0 };      // initial state

function setState(newState: Partial<State>) { // update function with Partial<State>
  state = { ...state, ...newState };          // merge new state
  render();                                   // call render on state change
}

function render(): void {                     // render function
  console.log("Current count:", state.count); // log current state
}

setState({ count: 1 });                       // update state
setState({ count: state.count + 1 });         // increment state

// 2) DOM update pattern (React/Vue style)
const appDiv = document.createElement("div"); // create container
document.body.appendChild(appDiv);            // append to body

function updateDOM(content: string): void {   // simple DOM update
  appDiv.textContent = content;               // update textContent
}

updateDOM(`Count is ${state.count}`);         // initial render
setState({ count: state.count + 5 });         // update state triggers render
updateDOM(`Count updated: ${state.count}`);   // manual update for demo

// 3) Event delegation pattern
const list = document.createElement("ul");    // create ul
document.body.appendChild(list);              // append to body
["Apple", "Banana", "Cherry"].forEach(item => { // populate list
  const li = document.createElement("li");    // create li
  li.textContent = item;                      // set text
  list.appendChild(li);                        // append to ul
});

list.addEventListener("click", (event) => {   // delegate click events
  const target = event.target as HTMLElement; // type cast
  if (target.tagName === "LI") {              // check clicked element
    console.log("Clicked:", target.textContent); // log clicked item
  }
});

/*
========================
📑 Short Explanation
========================
- State management → use a central state object and setState() to update & render.
- Partial<Type> → allows updating only part of state without overwriting.
- DOM update pattern → manually update DOM based on state changes.
- Event delegation → attach listener to parent, handle events for child elements.
- Purpose → mimic React/Vue patterns in vanilla JS/TS for maintainable code.
*/
