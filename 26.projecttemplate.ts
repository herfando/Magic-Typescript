// ===== Project Templates =====

// 1) Todo App (basic structure)
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

class TodoApp {
  private todos: Todo[] = [];

  addTask(task: string) {
    const newTodo: Todo = { id: Date.now(), task, completed: false };
    this.todos.push(newTodo);
  }

  toggleTask(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  getAllTasks() {
    return this.todos;
  }
}

const todoApp = new TodoApp();
todoApp.addTask("Learn TypeScript");
console.log(todoApp.getAllTasks());

// 2) Counter App (simple state)
class Counter {
  private count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log("Counter value:", counter.getCount()); // 2

// 3) API Service Template
class ApiService {
  constructor(private baseUrl: string) {}

  async get(endpoint: string) {
    const res = await fetch(`${this.baseUrl}${endpoint}`);
    return res.json();
  }
}

const api = new ApiService("https://jsonplaceholder.typicode.com");
api.get("/posts/1").then(data => console.log("Fetched Post:", data));

/*
========================
📑 Short Explanation
========================
- Todo App → Mini project showing CRUD operations & class usage.
- Counter App → Basic state management example with encapsulation.
- API Service → Reusable fetch wrapper with baseUrl and endpoint handling.
- Purpose → Templates serve as starter code for larger projects.
- Benefit → Saves time, enforces structure, encourages best practices.
*/
