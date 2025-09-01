// ===== Performance & Optimization =====

// 1) Throttle helper: limit function execution rate
function throttle<T extends (...args: any[]) => void>(fn: T, delay: number): T { // generic throttled function
  let lastCall = 0;                                                                 // last execution timestamp
  return function (...args: any[]) {                                                // return wrapper function
    const now = Date.now();                                                          // current time
    if (now - lastCall >= delay) {                                                  // check delay
      lastCall = now;                                                               // update lastCall
      fn(...args);                                                                  // call original function
    }
  } as T;
}

// Usage: throttle a log function
const log = throttle(() => console.log("Throttled at", new Date().toLocaleTimeString()), 1000); // log max once per second
setInterval(log, 200); // try triggering every 200ms

// 2) Debounce helper: run function after idle period
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {    // generic debounced function
  let timer: ReturnType<typeof setTimeout>;                                           // timer handle
  return function (...args: any[]) {                                                 // return wrapper function
    clearTimeout(timer);                                                             // clear previous timer
    timer = setTimeout(() => fn(...args), delay);                                     // schedule new execution
  } as T;
}

// Usage: debounce a search input
const search = debounce((query: string) => console.log("Search executed:", query), 500);
search("A"); search("AB"); search("ABC"); // only last call executed

// 3) Memory-safe loop example
function processLargeArray(arr: number[]): number[] {
  const result: number[] = [];                                                      // pre-allocate memory
  for (let i = 0; i < arr.length; i++) {                                            // loop over array
    result.push(arr[i] * 2);                                                        // simple processing
  }
  return result;                                                                    // return processed array
}

const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i);                 // create large array
console.log("Processed length:", processLargeArray(largeArray).length);            // process and log length

/*
========================
📑 Short Explanation
========================
- Throttle → limit how often a function can run (useful for scroll, resize, mousemove events).
- Debounce → delay function execution until activity stops (useful for search, input events).
- Memory-safe loops → pre-allocate arrays to reduce garbage collection overhead.
- Optimize async patterns → avoid unnecessary async calls; use throttle/debounce to reduce load.
- Purpose → improve performance, reduce CPU/memory spikes, make web apps smoother.
*/
