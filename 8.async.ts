// ===== Async TypeScript =====

// 1. Promise example
function fetchDataPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error: Failed to fetch data.");
            }
        }, 1000);
    });
}

fetchDataPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// 2. Async / Await
async function fetchDataAsync(): Promise<string> {
    return "Data fetched with async/await!";
}

async function runAsyncExample() {
    try {
        const result = await fetchDataAsync();
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}
runAsyncExample();

// 3. Fetch API with async/await
async function getUser(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log("User:", data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
getUser();

// 4. Parallel async (Promise.all)
async function getMultipleData(): Promise<void> {
    try {
        const [posts, comments] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/comments/1").then(res => res.json())
        ]);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    } catch (error) {
        console.error("Error fetching multiple data:", error);
    }
}
getMultipleData();

/*
Short Explanation:
- Promise → Handles success/failure of async tasks
- async/await → Cleaner syntax for async code
- fetch API → Makes HTTP requests
- Promise.all → Run async tasks in parallel
*/
