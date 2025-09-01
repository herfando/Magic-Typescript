// ===== Fetch API (Typed) =====

// 1) Generic GET helper (typed JSON)
async function getJSON<T>(url: string, init?: RequestInit): Promise<T> { // generic GET returning T
  const res: Response = await fetch(url, { ...init, method: "GET" });    // perform GET request
  if (!res.ok) throw new Error(`HTTP ${res.status}`);                     // guard: non-2xx -> throw
  const data: T = await res.json();                                       // parse JSON as T
  return data;                                                            // return typed data
}

// Example types
interface Post {                                                          // API model: Post
  userId: number;                                                         // user id
  id: number;                                                             // post id
  title: string;                                                          // post title
  body: string;                                                           // post body
}

// Usage: GET single resource
async function fetchPostById(id: number): Promise<Post> {                 // fetch a single Post
  return getJSON<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`); // typed GET
}

// Usage: GET list resource
async function fetchPosts(): Promise<Post[]> {                            // fetch array of Post
  return getJSON<Post[]>("https://jsonplaceholder.typicode.com/posts");   // typed GET list
}

// 2) Generic POST helper (typed body + typed response)
async function postJSON<TBody, TRes>(url: string, body: TBody): Promise<TRes> { // generic POST
  const res: Response = await fetch(url, {                                // perform POST request
    method: "POST",                                                       // HTTP method
    headers: { "Content-Type": "application/json" },                      // JSON header
    body: JSON.stringify(body),                                           // serialize request body
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);                     // guard on failure
  const data: TRes = await res.json();                                    // parse JSON as TRes
  return data;                                                            // return typed response
}

// Example: create a post (omit id on create)
type NewPost = Omit<Post, "id">;                                          // body without id

async function createPost(payload: NewPost): Promise<Post> {              // create and return Post
  return postJSON<NewPost, Post>("https://jsonplaceholder.typicode.com/posts", payload); // typed POST
}

// 3) End-to-end demo with error handling
async function demoFetch(): Promise<void> {                               // demo runner
  try {                                                                   // try-catch for safety
    const one: Post = await fetchPostById(1);                             // GET single
    console.log("Single Post:", one);                                     // log result

    const list: Post[] = await fetchPosts();                              // GET list
    console.log("Posts count:", list.length);                             // log length

    const created: Post = await createPost({                              // POST create
      userId: 1,                                                          // payload userId
      title: "Hello TS Fetch",                                            // payload title
      body: "Typed fetch with generics.",                                 // payload body
    });
    console.log("Created Post:", created);                                // log created resource
  } catch (err) {                                                         // handle errors
    const message = err instanceof Error ? err.message : String(err);     // normalize message
    console.error("Fetch error:", message);                               // log error
  }
}

demoFetch();                                                              // run the demo

/*
========================
📑 Short Explanation
========================
- fetch() returns a Response → check res.ok before parsing.
- async/await makes async code readable; wrap in try/catch for errors.
- getJSON<T>() / postJSON<TBody, TRes>() use generics to type inputs/outputs.
- GET retrieves data; POST sends a JSON body and expects a typed response.
- RequestInit lets you pass method, headers, body, etc.
- Omit<T, K> helps shape request payloads (e.g., exclude id on create).
*/
